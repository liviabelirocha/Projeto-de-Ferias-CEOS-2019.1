import React from 'react';
import * as firebase from 'firebase';
import { createAppContainer } from 'react-navigation';
import { createAuthNavigator } from './src/router';

//Inicialização do Firebase
const firebaseConfig = {
	apiKey: "CHAVEDEAPI",
	authDomain: "projeto-de-ferias-2k19-1.firebaseapp.com",
	databaseURL: "https://projeto-de-ferias-2k19-1.firebaseio.com",
	storageBucket: "projeto-de-ferias-2k19-1.appspot.com",
};

firebase.initializeApp(firebaseConfig);
export default createAppContainer(createAuthNavigator());
