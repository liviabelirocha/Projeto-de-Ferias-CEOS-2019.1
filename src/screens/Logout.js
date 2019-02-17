import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { commonStyles } from '../theme';
import { logout } from '../auth';

const Logout = (props) => {
  return (
    <View style={commonStyles.container}>
      <Image style={styles.picture} source={{uri: props.user.photoURL}}/>
      <Text style={commonStyles.title}>{props.user.nome}</Text>

      <Text style={[commonStyles.onSurfaceText, {marginBottom: 16}]}>Não se preocupe, seus dados permanecerão salvos.</Text>
      <TouchableOpacity style={commonStyles.button} onPress={logout}>
        <Text style={commonStyles.text}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  picture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16
  }
});

export default Logout;
