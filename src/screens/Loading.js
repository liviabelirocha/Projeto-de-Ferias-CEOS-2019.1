import React from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';
import { commonStyles, colors } from '../theme';

const Loading = () => {
  return (
    <View style={commonStyles.container}>
      <ActivityIndicator color={colors.accent} size="large"/>
    </View>
  )
}

export default Loading;
