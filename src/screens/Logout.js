import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { commonStyles } from '../theme';
import { logout } from '../auth';

const Logout = (props) => {
  return (
    <View style={commonStyles.container}>
    <TouchableOpacity onPress={logout}>
      <Text style={commonStyles.onSurfaceText}>LOGOUT</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Logout;
