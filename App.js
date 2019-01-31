import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { Home } from './components/Home';
import { Financas } from './components/Finanças';

//Inicialização do Firebase
const firebaseConfig = {
	apiKey: "AIzaSyD20OA5Pm6XJ5jVdbdS94-m5Dq-OVKApng",
	authDomain: "projeto-de-ferias-2k19-1.firebaseapp.com",
	databaseURL: "https://projeto-de-ferias-2k19-1.firebaseio.com",
	storageBucket: "projeto-de-ferias-2k19-1.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
	render() {
		return (
			<Financas />
		);
	}
}
