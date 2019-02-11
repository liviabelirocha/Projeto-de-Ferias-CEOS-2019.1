import React from 'react';
import {	
  StyleSheet, 
  Text, 
  View, 
  TextInput,  
  TouchableOpacity, 
  TouchableHighlight 
} from 'react-native';
import * as firebase from 'firebase';
import { commonStyles } from '../theme';
class Login extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	doLogin(email, password) {
		firebase.auth().signInWithEmailAndPassword(email, password).then( () =>{
			let user = firebase.auth().currentUser;
			firebase.database().ref('users' + user.uid + 'salario').once("value", snapshot => {
				if (snapshot.exists()) {
					this.props.navigation.push('Financas');
				} else {
					this.props.navigation.push('FirstLogin');
				}
			});
		}).catch( (error) =>{
			if (email == '' || password == ''){
				alert('Preencha todos os campos');
			} else if (error.code == 'auth/invalid-email') {
				alert('Email não válido');
			} else if (error.code == 'auth/user-not-found') {
				alert('Usuário não encontrado. Cheque o email ou crie uma conta.')
			} else if (error.code == 'auth/wrong-password') {
				alert('Senha inválida');
			}
		});
	}

	render() {
		return (
			<View style={commonStyles.container}>
				<Text style={styles.logo}>Logo Aqui</Text>
				<TextInput style={commonStyles.input}
					placeholder = "email"
					onChangeText = {(email) => this.setState({email})} 
				/>
				<TextInput style={commonStyles.input}
					placeholder = "senha"
					secureTextEntry={true}
					onChangeText = {(password) => this.setState({password})}
				/>
				<TouchableOpacity style={commonStyles.button} onPress={() => this.doLogin(this.state.email, this.state.password)}>
					<Text style={commonStyles.text}>LOGIN</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
					<Text style={commonStyles.text} >Não possui uma conta? Cadastre-se</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	logo: {
		color: 'white',
		fontSize: 30,
		marginBottom: 70,
	},
});

export default Login;
