import * as React from 'react';
import { View, TouchableWithoutFeedback, TouchableNativeFeedback, Platform, Text, TextStyle, ViewStyle } from 'react-native';
import { styles } from './styles';

interface Props {
  title: string;
  titleStyle?: TextStyle;
  containerStyle?: ViewStyle;
  onPress: () => void;
  showLoading: boolean;
}

const Touchable = Platform.OS === 'ios' ? TouchableWithoutFeedback : TouchableNativeFeedback;

export const Button = React.memo(
  ({
    title,
    titleStyle,
    containerStyle,
    onPress,
    showLoading,
    ...props
  }: Props) => {
    return (
      <Touchable onPress={onPress} {...props}>
        <View style={[styles.container, containerStyle]}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        </View>
      </Touchable>
    )
  })