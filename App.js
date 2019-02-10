import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as firebase from 'firebase';

import { Home } from './src/components/Home';
import { Financas } from './src/components/Financas';
import { Register } from './src/components/Register';
import { InformationInput } from './src/components/InformationInput';

//Inicialização do Firebase
const firebaseConfig = {
	
	authDomain: "projeto-de-ferias-2k19-1.firebaseapp.com",
	databaseURL: "https://projeto-de-ferias-2k19-1.firebaseio.com",
	storageBucket: "projeto-de-ferias-2k19-1.appspot.com",
};

firebase.initializeApp(firebaseConfig);

const AppNavigator = createStackNavigator(
	{
  	Login: Home,
		Cadastro: Register,
		Financas: Financas,
		FirstLogin: InformationInput
	},
	{
		initialRouteName: 'Login',
	}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}