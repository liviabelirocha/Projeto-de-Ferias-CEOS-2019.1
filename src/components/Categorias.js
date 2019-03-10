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
    icon: 'game-controller'
  },
  {
    nome: 'compras',
    cor: colors.orange,
    icon: 'basket-loaded'
  },
  {
    nome: 'outro',
    cor: colors.blue,
    icon: 'grid'
  },
];

const Categorias = (props) => {
  return (
    <View>

    </View>
  )
}

export default Categorias;
