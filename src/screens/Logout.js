import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import FAB from '../components/FAB';
import { commonStyles } from '../theme';
import { logout } from '../auth';

const Logout = (props) => {
  return (
    <View style={commonStyles.container}>
      <Image style={styles.picture} source={{uri: props.user.photoURL}}/>
      <Text style={commonStyles.title}>{props.user.nome}</Text>
      <Text style={[commonStyles.onSurfaceText, {marginBottom: 16}]}>Seus dados permanecerão salvos para a próxima vez.</Text>
      <FAB icon='log-out' onPress={logout} />
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
