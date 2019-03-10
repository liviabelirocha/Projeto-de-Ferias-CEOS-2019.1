import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Animated,
  Easing
} from 'react-native';
import { commonStyles, colors, dimensions } from '../theme';
import ExpenseCard from '../components/ExpenseCard';
import FAB from '../components/FAB';
import { categoryData, CategoryBtn } from '../components/CategoryBtn';

class Historico extends React.Component {

  user = this.props.user;

  state = {
    filterOn: false,
    filterHeight: new Animated.Value(0),
    categorias: {
      casa: true,
      lazer: true,
      compras: true,
      outro: true
    }
  }

  toggleFilters = () => {
    let filterOn = this.state.filterOn;
    Animated.timing(
      this.state.filterHeight, 
      {toValue: !filterOn ? 72 : 0,
      easing: Easing.cubic}
    ).start();
    this.setState({
      filterOn: !filterOn
    });
  }

  switchCategory = (category) => {
    let categorias = {...this.state.categorias};
    categorias[category] = !categorias[category];
    this.setState({categorias});
  }

  historico = () => {
    if(this.user.gastos) {
      let cards = []
      if(this.user.gastos) {
        for(var id in this.user.gastos) {
          let despesa = this.user.gastos[id].categoria;
          if (this.state.categorias[despesa]) cards.push({id: id, ...this.user.gastos[id]});
        }
      }
      return (
        <View>
          <Animated.View style={[styles.categoryView, {height: this.state.filterHeight}]}>
          {Object.keys(categoryData).map(e => {
              let cat = categoryData[e];
              return <CategoryBtn 
                key={cat.cor} 
                icon={cat.icon} 
                color={cat.cor} 
                category={e.toUpperCase()}
                onPress={() => this.switchCategory(e)}
              />
            })}
          </Animated.View>
          <FlatList
            data={cards.reverse()}
            renderItem={
              ({item}) =>
              <ExpenseCard
                key={item.id}
                color={categoryData[item.categoria].cor}
                title={item.titulo}
                content={item.desc}
                value={item.valor}
              />}
          />
        </View>
      )
    } else {
      return (
        <View style={commonStyles.container}>
          <Text style={commonStyles.text}>Não há nenhum gasto cadastrado.</Text>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={{...commonStyles.container, justifyContent: 'flex-start'}}>
        {this.historico()}
        {this.user.gastos ? 
          <FAB 
            icon={this.state.filterOn?'check':'filter'} 
            onPress={this.toggleFilters}
          />
        : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  categoryView: {
    width: dimensions.width - 32,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    overflow: 'hidden'
  }
});

export default Historico;
