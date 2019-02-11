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
			<View style={styles.container}>
				<Text style={styles.logo}>Logo Aqui</Text>
				<TextInput style={styles.input}
					placeholder = "email"
					onChangeText = {(email) => this.setState({email})} 
				/>
				<TextInput style={styles.input}
					placeholder = "senha"
					secureTextEntry={true}
					onChangeText = {(password) => this.setState({password})}
				/>
				<TouchableOpacity style={styles.button} onPress={() => this.doLogin(this.state.email, this.state.password)}>
					<Text style={styles.text}>LOGIN</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
					<Text style={styles.text} >Não possui uma conta? Cadastre-se</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#363640',
		alignItems: 'center',
		justifyContent: 'center',
	},

	logo: {
		color: 'white',
		fontSize: 30,
		marginBottom: 70,
	},

	input: {
		backgroundColor: '#454650',
		paddingLeft: 12,
		paddingRight: 12,
		width: 280, 
		height: 56,
		margin: 1,
		color: 'white'
	},

	button: {
		backgroundColor: '#454650',
		paddingLeft: 12,
		paddingRight: 12,
		paddingTop: 16,
		width: 280,
		height: 56,
		alignItems: 'center',
		margin: 1,
	},

	text: {
		color: 'white',
		fontSize: 15,
	}
});

export default Login;
