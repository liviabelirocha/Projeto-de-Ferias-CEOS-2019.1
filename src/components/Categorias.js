import React from 'react';
import {
  View,
  Text
} from 'react-native'
import { colors } from '../theme';

export const categoryData = [
  {
    nome: 'casa',
    cor: colors.yellow,
    icon: 'home'
  },
  {
    nome: 'lazer',
    cor: colors.purple,
    icon: 'umbrella'
  },
  {
    nome: 'compras',
    cor: colors.orange,
    icon: 'shopping-cart'
  },
  {
    nome: 'outro',
    cor: colors.blue,
    icon: 'globe'
  },
];

const Categorias = (props) => {
  return (
    <View>

    </View>
  )
}

export default Categorias;
