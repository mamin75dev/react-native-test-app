import * as React from 'react';
import { View, TextInput, ViewStyle, Text, TextStyle } from 'react-native';
import { colors } from '../../styles/colors';
import { styles } from './styles';

interface Props {
  value?: string;
  onChangeText?: (arg: string) => void;
  placeholder?: string;
  containerStyle?: ViewStyle,
  title?: string;
  titleStyle?: TextStyle,
  inputStyle?: ViewStyle,
  error?: string;
  errorStyleProps?: TextStyle;
}

export const Input = React.memo(
  ({
    value,
    onChangeText,
    placeholder,
    containerStyle,
    title,
    titleStyle,
    inputStyle,
    error,
    errorStyleProps,
    ...props
  }: Props) => {

    const errorStyle = {
      ...errorStyleProps,
      borderWidth: 2,
      borderColor: colors.red,
    }

    return (
      <React.Fragment>
        <View style={[styles.container, containerStyle, error ? errorStyle : {}]}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={[styles.input, inputStyle]}
            {...props}
          />
        </View>
        {
          error ?
            <Text style={styles.error}>{error}</Text> : null
        }
      </React.Fragment>
    )
  })