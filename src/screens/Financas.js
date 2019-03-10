import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import { commonStyles, colors } from '../theme';
import Pie from 'react-native-pie';
import FAB from '../components/FAB';
import ExpenseCard from '../components/ExpenseCard';
import { categoryData } from '../components/CategoryBtn';

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
        content={compras ? compras + ' despesa(s) nesta categoria.' : null }
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
    let custoPorCategoria = {casa: 0, lazer: 0, compras: 0, outro: 0};
    let gastosPorCategoria = {casa: 0, lazer: 0, compras: 0, outro: 0};
    for(var id in user.gastos) {
      let despesa = user.gastos[id];
      custoPorCategoria[despesa.categoria] += despesa.valor;
      gastosPorCategoria[despesa.categoria] += 1;
    }
    for(var cat in custoPorCategoria) {
      if(custoPorCategoria[cat] > 0) pushData(custoPorCategoria[cat], {nome: cat, ...categoryData[cat]}, gastosPorCategoria[cat]);
    }
  }
  pushData(user.salario - total, {nome: 'saldo', cor: colors.green});
  return { cards, piedata };
}

const Financas = (props) => {
  let user = props.user;
  let { cards, piedata } = processUserData(user);
  return (
    <View style={commonStyles.container}>
      <View style={styles.section}>
        <Pie
          radius={75}
          series={piedata.values}
          colors={piedata.colors}
          backgroundColor={colors.primary}
        />
      </View>
      <View style={styles.section}>
        <ScrollView>
          {cards}
        </ScrollView>
      </View>

      <FAB icon='plus' onPress={() => {}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default Financas;
