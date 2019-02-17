import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import { commonStyles, colors } from '../theme';
import Pie from 'react-native-pie';
import FAB from '../components/FAB';
import ExpenseCard from '../components/ExpenseCard';

const valueToPercentage = (total, value) => {
  return (value/total)*100;
}

const Financas = (props) => {
  user = props.user;
  return (
    <View style={commonStyles.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Pie
          radius={75}
          series={[valueToPercentage(user.salario, user.salario - 300), valueToPercentage(user.salario, 300)]}
          colors={[colors.green, colors.lightGreen]}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ScrollView>
          <ExpenseCard
            value={user.salario - 300}
            color='green'
            title='Saldo'/>
          <ExpenseCard
            value={300}
            color='lightGreen'
            title='Poupança'/>
        </ScrollView>
      </View>

      <FAB icon='plus' onPress={() => {console.log(user)}}/>
    </View>
  )
}

export default Financas;
