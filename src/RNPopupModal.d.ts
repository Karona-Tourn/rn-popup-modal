import { Component } from 'react';
import { StyleProp, ViewStyle, ModalProps } from 'react-native';

interface RNPopupModalProps extends ModalProps {
    title?: string | null;
    titleStyle?: StyleProp<ViewStyle> | null;
    blockBackgroundColor?: string | null;
    windowContainerStyle?: StyleProp<ViewStyle> | null;
    headerLineStyle?: StyleProp<ViewStyle> | null;
    headerContainerStyle?: StyleProp<ViewStyle> | null;
    scrollViewStyle?: StyleProp<ViewStyle> | null;
    scrollViewContentContainerStyle?: StyleProp<ViewStyle> | null;
    transitionDuration?: number | null;
    transitionFromScale?: number | null;
    backgroundColor?: string | null;
}

export default class RNPopupModal extends Component<RNPopupModalProps> {
    show(): void;
}
