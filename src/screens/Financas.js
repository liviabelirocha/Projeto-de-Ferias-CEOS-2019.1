import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import * as firebase from 'firebase';
import { commonStyles, colors } from '../theme';
import Pie from 'react-native-pie';
import FAB from '../components/FAB';
import ExpenseCard from '../components/ExpenseCard';
import { categoryData } from '../components/Categorias';

const processUserData = (user) => {
  let cards = [];
  let piedata = {values: [], colors: []};
  let total = 0;
  const pushData = (custo, categoria, compras = null) => {
    cards.push(
      <ExpenseCard
        key={categoria.nome}
        value={custo}
        color={categoria.cor}
        title={categoria.nome}
        content={compras ? compras + ' compra(s) nesta categoria.' : null }
      />
    );
    total += custo;
    piedata.values.push((custo/user.salario)*100);
    piedata.colors.push(categoria.cor);
  }
  if(user.poupanca) {
    let poupanca = 10 * user.salario/100;
    pushData(poupanca, {nome: 'poupança', cor: colors.lightGreen});
  }
  if(user.gastos) {
    for (var i = 0; i < categoryData.length; i++) {
      const categoria = categoryData[i]
      if(user.gastos[categoria.nome]) {
        let custo = 0;
        let compras = 0;
        user.gastos[categoria.nome].map(g => {
          custo += g.valor;
          compras += 1
        });
        pushData(custo, categoria, compras);
      }
    }
  }
  pushData(user.salario - total, {nome: 'saldo', cor: colors.green});
  return {cards, piedata};
}

const Financas = (props) => {
  let user = props.user;
  let { cards, piedata } = processUserData(user);
  return (
    <View style={commonStyles.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Pie
          radius={75}
          series={piedata.values}
          colors={piedata.colors}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ScrollView>
          {cards}
        </ScrollView>
      </View>

      <FAB icon='plus' onPress={() => {}}/>
    </View>
  )
}

export default Financas;
