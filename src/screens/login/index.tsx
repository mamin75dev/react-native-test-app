import React from 'react';
import {
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { styles } from './styles';
import { Input } from '../../common/components';
import { Button } from '../../common/components/button';

export const Login = () => {

  const signIn = () => { }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input title={'Email'} />
      <Input title={'Password'} error={'Invalid Password'} />
      <Button
        title={'Login'}
        onPress={signIn}
      />
    </KeyboardAvoidingView>
  );
};
