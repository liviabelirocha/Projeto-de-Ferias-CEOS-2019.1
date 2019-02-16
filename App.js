import React from 'react';
import * as firebase from 'firebase';
import { createAppContainer } from 'react-navigation';
import { createRootNavigator } from './src/router';
import Loading from './src/screens/Loading';

//Inicialização do Firebase
const firebaseConfig = {
	apiKey: "AIzaSyD20OA5Pm6XJ5jVdbdS94-m5Dq-OVKApng",
	authDomain: "projeto-de-ferias-2k19-1.firebaseapp.com",
	databaseURL: "https://projeto-de-ferias-2k19-1.firebaseio.com",
	storageBucket: "projeto-de-ferias-2k19-1.appspot.com",
};

firebase.initializeApp(firebaseConfig);

class App extends React.Component {

  state = {
    user: null,
    checkResult: false
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user: user, checkResult: true });
    });
  }
  render() {
    const { user, checkResult } = this.state;
    if(!checkResult) return <Loading/>
    const Navigator = createAppContainer(createRootNavigator(user));
    return <Navigator/>;
  }
}

export default App;
