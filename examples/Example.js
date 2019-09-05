import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  Image,
  Dimensions
} from 'react-native';
import RNPopupModal from '../src/RNPopupModal';

export default class Example extends React.Component {
  render() {
    return (
      <Fragment>
        <SafeAreaView style={styles.container}>
          <Button
            title='The Pyrenees'
            onPress={() => {
              this._modal.show();
            }}
          />
        </SafeAreaView>
        <RNPopupModal
          ref={ref => (this._modal = ref)}
          title='The Pyrenees'
          windowAreaStyle={{ height: Dimensions.get('screen').height * 0.7 }}>
          <Image
            source={{
              uri:
                'https://www.smartertravel.com/uploads/2012/03/stm4f4fa817459b420120301.jpg'
            }}
            style={styles.image}
            resizeMode='cover'
          />
          <Text style={styles.title}>
            Best Hidden Destination for Mountain Lovers: The Pyrenees
          </Text>

          <Text style={{ fontSize: 16 }}>
            “The Pyrenees in southern France and northern Spain [are] everything
            people crave about the Alps with a fraction of the people. [They
            have so much to offer, including] incredible high-country national
            parks in Gavarnie, Ordesa, and Aiguestortes; hearty regional
            cuisine; the running of the bulls in Pamplona—and even duty-free
            shopping in tiny Andorra.”
          </Text>
        </RNPopupModal>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: 'grey',
    marginBottom: 10
  },
  title: {
    color: 'orange',
    marginVertical: 10,
    fontSize: 20
  }
});
