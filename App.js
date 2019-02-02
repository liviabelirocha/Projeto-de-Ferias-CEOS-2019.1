import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as firebase from 'firebase';
import { Home } from './components/Home';
import { Financas } from './components/Financas';
import { Register } from './components/Register';

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