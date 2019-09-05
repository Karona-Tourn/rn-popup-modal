import React from 'react';
import {
  View,
  Text,
  Modal,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions
} from 'react-native';
import { RNTweenView, TweenEasing } from 'rn-tween';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';

const defaultRadius = Math.min(wp(2), hp(2));
const hitSlopOffset = Math.min(wp(2), hp(2));

const CloseButton = ({ onPress }) => {
  const size = Math.min(wp(6), hp(6));
  const style = {
    position: 'absolute',
    width: size,
    height: size,
    end: -size / 2.0,
    top: -size / 2.0,
    borderRadius: size / 2.0,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <TouchableWithoutFeedback
      hitSlop={{
        top: hitSlopOffset,
        bottom: hitSlopOffset,
        left: hitSlopOffset,
        right: hitSlopOffset
      }}
      onPress={onPress}>
      <View style={style}>
        <Text
          style={{
            color: '#fff'
          }}>
          x
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const HeaderLine = ({ style }) => (
  <View style={[defaultStyles.headerLine, StyleSheet.flatten(style)]} />
);

export default class RNPopupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visibleOnMount ? true : false
    };

    const dimensions = Dimensions.get('screen');
    this.state.width = dimensions.width;
    this.state.height = dimensions.height;
  }

  componentDidMount() {
    Dimensions.addEventListener('change', this._onDimensionChange);
  }

  _onDimensionChange = ({ screen }) => {
    if (this._willUnmount) {
      return;
    }

    this.setState({
      width: screen.width,
      height: screen.height
    });
  };

  componentWillUnmount() {
    this._willUnmount = true;
    Dimensions.removeEventListener('change', this._onDimensionChange);
  }

  show() {
    this.setState({ visible: true });
  }

  render() {
    const {
      blockBackgroundColor,
      windowAreaStyle,
      visible,
      onRequestClose,
      ...restProps
    } = this.props;
    const { width, height } = this.state;

    return (
      <Modal
        {...restProps}
        visible={this.state.visible}
        onRequestClose={this._onRequestClose}>
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: blockBackgroundColor
              ? blockBackgroundColor
              : 'transparent'
          }}>
          <TouchableWithoutFeedback onPress={this._onRequestClose}>
            <View style={StyleSheet.absoluteFillObject} />
          </TouchableWithoutFeedback>

          <RNTweenView
            autoStartName="transit"
            initialConfig={{
              transit: {
                mode: 'parallel',
                configs: [
                  {
                    from: 0,
                    to: 1,
                    duration: 200,
                    styleProperty: 'opacity'
                  },
                  {
                    from: 1.1,
                    to: 1,
                    duration: 200,
                    styleProperty: 'scale',
                    easing: TweenEasing.linear
                  }
                ]
              }
            }}
            style={{
              ...StyleSheet.flatten(windowAreaStyle),
              width: width * 0.8,
              height: height * 0.8
            }}>
            <View style={defaultStyles.visualWindow}>
              {this._renderHead()}
              {this._renderBody()}
            </View>

            <CloseButton onPress={this._onRequestClose} />
          </RNTweenView>
        </SafeAreaView>
      </Modal>
    );
  }

  _renderHead() {
    const {
      headerContainerStyle,
      titleStyle,
      title,
      headerLineStyle
    } = this.props;

    return [
      <View
        key={1}
        style={[
          defaultStyles.headerContainer,
          StyleSheet.flatten(headerContainerStyle)
        ]}>
        <Text
          style={[defaultStyles.title, StyleSheet.flatten(titleStyle)]}
          numberOfLines={1}>
          {title}
        </Text>
      </View>,
      <HeaderLine key={2} style={headerLineStyle} />
    ];
  }

  _renderBody() {
    const {
      scrollViewStyle,
      children,
      scrollViewContentContainerStyle
    } = this.props;

    return (
      <ScrollView
        style={[defaultStyles.scrollView, StyleSheet.flatten(scrollViewStyle)]}
        contentContainerStyle={[
          defaultStyles.scrollViewContentContainer,
          StyleSheet.flatten(scrollViewContentContainerStyle)
        ]}>
        {children}
      </ScrollView>
    );
  }

  _onRequestClose = () => {
    this.setState({ visible: false });
  };
}

RNPopupModal.defaultProps = {
  blockBackgroundColor: 'rgba(0,0,0,0.5)',
  supportedOrientations: [
    'landscape',
    'portrait',
    'landscape-left',
    'landscape-right',
    'portrait-upside-down'
  ],
  transparent: true
};

RNPopupModal.propTypes = {
  title: PropTypes.string,
  blockBackgroundColor: PropTypes.string,
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  windowAreaStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  headerLineStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  headerContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  scrollViewStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  scrollViewContentContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};

const defaultStyles = {
  visualWindow: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: defaultRadius,
    overflow: 'hidden'
  },
  headerContainer: {
    paddingHorizontal: Math.min(wp(2), hp(2)),
    paddingVertical: Math.min(wp(2), hp(2)),
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: Math.min(wp(5), hp(5)),
    fontWeight: 'bold',
    textAlignVertical: 'center'
  },
  scrollView: {
    flex: 1
  },
  scrollViewContentContainer: {
    padding: Math.min(wp(2), hp(2))
  },
  headerLine: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'grey'
  }
};
