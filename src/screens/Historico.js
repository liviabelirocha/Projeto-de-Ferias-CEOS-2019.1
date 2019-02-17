import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { commonStyles } from '../theme';

const Historico = (props) => {

  user = props.user;

  historico = () => {
    if(user.gastos) {

    } else {
      return (
        <View>
          <Text style={commonStyles.text}>Não há nenhum gasto cadastrado.</Text>
        </View>
      )
    }
  }

  return (
    <View style={commonStyles.container}>
      {historico()}
    </View>
  )
}

export default Historico;
