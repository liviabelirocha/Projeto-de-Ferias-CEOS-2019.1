import React from 'react';
import {	StyleSheet, 
					Text, 
					View, 
					TextInput,  
					TouchableOpacity
				} from 'react-native';
import * as firebase from 'firebase';

export class Register extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			emailInput: "",
			userInput: "",
			passwordInput: ""
		};
		this.infoSend = this.infoSend.bind(this);
	}

	infoSend(e) {
		this.setState({
			emailInput: e.target.value,
			userInput: e.target.value,
			passwordInput: e.target.value
		});
	}

	register() {
		firebase.auth().createUserWithEmailAndPassword(this.emailInput, this.passwordInput).then(function (){
			function writeUserData(UserId, name, email, password) {
				firebase.database().ref('users/' + userId).set({
					username: name,
					email: email,
					password: password
				});
			}
			let user = firebase.auth().currentUser;
			writeUserData(user.uid, this.userInput, this.emailInput, this.passwordInput);
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.logo}>Registro</Text>
				<TextInput style={styles.input}
					placeholder = "email"
					onChange={this.infoSend} 
					value={this.state.emailInput}
				/>
				<TextInput style={styles.input}
					placeholder = "usuário"
					onChange={this.infoSend} 
					value={this.state.userInput}
				/>
				<TextInput style={styles.input}
					placeholder = "senha"
					onChange={this.infoSend} 
					value={this.state.passwordInput}
				/>
				<TouchableOpacity style={styles.button} onPress={this.register}>
					<Text style={styles.text}>Cadastre-se</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
					<Text style={styles.text}>Já possui uma conta?</Text>
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
