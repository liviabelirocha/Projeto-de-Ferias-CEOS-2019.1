import * as firebase from 'firebase';
import { Alert } from 'react-native'; 

export const login = (email, password, navigator) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(e => validate(e, navigator));
}

export const register = (email, nome, password, salario, poupanca, navigator) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
    user = firebase.auth().currentUser;
    firebase.database().ref('users/' + user.uid).set({
      nome: nome,
      email: email,
      photoURL: 'https://i.imgur.com/dX7ZWmB.png',
      salario: parseInt(salario),
      poupanca: poupanca,
      gastos: {}
    })
  }).catch((e) => validate(e, navigator));
}

export const logout = () => {
  firebase.auth().signOut().then(() => {});
}

const validate = (error, navigator) => {
  console.log(error.code)
  switch(error.code) {
    case 'auth/invalid-email':
      Alert.alert('Erro', 'Email não válido');
      break;
    case 'auth/user-not-found':
      Alert.alert('Usuário não encontrado', 
      'Cheque o email ou crie uma conta.', [
        {text: 'Criar conta', onPress: () => navigator.navigate('Register')},
        {text: 'OK', onPress: () => {}},
      ]);
      break;
    case 'auth/wrong-password':
      alert('Senha inválida');
      break;
    case 'auth/weak-password':
      Alert.alert('Senha fraca',
      'Por favor, utilize mais de 6 caracteres.');
      break;
    case 'auth/email-already-in-use':
      Alert.alert('Email em uso', 
      'Escolha um email válido ou logue em sua conta.', [
        {text: 'Logar', onPress: () => navigator.navigate('Login')},
        {text: 'OK', onPress: () => {navigator.navigate('Register')}},
      ]);
      break;
    case 'auth/internal-error':
      alert('Ocorreu um erro interno.',
      'Por favor, tente novamente.');
      break;
  }
}
