import React from 'react';
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { colors } from '../theme';
import Icon from 'react-native-vector-icons/Feather';

const FAB = (props) => {
  return (
    <TouchableOpacity 
      style={styles.fab}
      onPress={props.onPress}>
      <Icon 
        name={props.icon} 
        size={24} 
        color='#000'
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    flexDirection: 'row',
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});

export default FAB;
