import React from 'react';
import * as firebase from 'firebase';
import { createAppContainer } from 'react-navigation';
import createRootNavigator from './src/navigator';
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

  listener = null;

  state = {
    user: null,
    checkResult: false
  }

  componentWillMount() {
    this.listener = firebase.auth().onAuthStateChanged(user => {
      if(user) {
        const userId = firebase.auth().currentUser.uid;
        const userRef = firebase.database().ref('users/' + userId);
        userRef.on('value', snapshot => {
          this.setState({user: {...snapshot.val()}, checkResult: true})
        });
      } else {
        this.setState({ user: user, checkResult: true });
      }
    });
  }

  componentWillUnmount() {
    if (this.listener) {
      this.listener();
    }
  }

  render() {
    const { user, checkResult } = this.state;
    if(!checkResult) return <Loading/>
    const Navigator = createAppContainer(createRootNavigator(user));
    return <Navigator/>;
  }
}

export default App;
