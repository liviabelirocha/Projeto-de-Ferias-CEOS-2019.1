import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { commonStyles, colors, dimensions } from '../theme';
import ExpenseCard from '../components/ExpenseCard';
import { categoryData, CategoryBtn } from '../components/CategoryBtn';

const Historico = (props) => {

  let user = props.user;

  cardList = () => {
    let cards = []
    if(user.gastos) {
      for(var i = 0; i < categoryData.length; i++) {
        if(user.gastos[categoryData[i].nome]) {
          let cat = user.gastos[categoryData[i].nome];
          cat.map(despesa => {
            cards.push(
              <ExpenseCard
              key={despesa.data}
              color={categoryData[i].cor}
              title={despesa.titulo}
              value={despesa.valor}
              content={despesa.desc}
              />
            )
          })
        }
      }
    }
    return (
      <View>
        {cards}
      </View>
    )
  }

  historico = () => {
    if(user.gastos) {
      return (
        <View>
          <View style={styles.categoryView}>
            {categoryData.map(cat => {
              return <CategoryBtn 
                key={cat.nome} 
                icon={cat.icon} 
                color={cat.cor} 
                category={cat.nome.toUpperCase()}
                onPress={() => {}}
              />
            })}
          </View>
          {cardList()}
        </View>
      )
    } else {
      return (
        <View>
          <Text style={commonStyles.text}>Não há nenhum gasto cadastrado.</Text>
        </View>
      )
    }
  }

  return (
    <View style={{...commonStyles.container, justifyContent: 'flex-start'}}>
      {historico()}
    </View>
  )
}

const styles = StyleSheet.create({
  categoryView: {
    width: dimensions.width - 32,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 16
  }
});

export default Historico;
