import { Component } from 'react';
import { StyleProp, ViewStyle, ModalProps } from 'react-native';

interface RNPopupModalProps extends ModalProps {
    title?: string | null;
    titleStyle?: StyleProp<ViewStyle> | null;
    blockBackgroundColor?: string | null;
    windowAreaStyle?: StyleProp<ViewStyle> | null;
    headerLineStyle?: StyleProp<ViewStyle> | null;
    headerContainerStyle?: StyleProp<ViewStyle> | null;
    scrollViewStyle?: StyleProp<ViewStyle> | null;
    scrollViewContentContainerStyle?: StyleProp<ViewStyle> | null;
}

export default class RNPopupModal extends Component<RNPopupModalProps> {
    show(): void;
}
