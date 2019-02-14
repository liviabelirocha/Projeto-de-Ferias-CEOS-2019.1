import React from 'react';
import {	
  StyleSheet, 
  Text, 
  View, 
  TextInput,  
	TouchableOpacity,
	Alert
} from 'react-native';
import { register } from '../auth';
import { commonStyles } from '../theme';

class Register extends React.Component {

  state = {
    email: '',
    nome: '',
		password: '',
	};

	validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
	}

	render() {
		return (
			<View style={commonStyles.container}>

				<Text style={styles.logo}>Registro</Text>
				<TextInput style={commonStyles.input}
					placeholder = "email"
					onChangeText={(email) => this.setState({email})} 
				/>
				<TextInput style={commonStyles.input}
					placeholder = "nome"
					onChangeText={(nome) => this.setState({nome})} 
				/>
				<TextInput style={commonStyles.input}
					placeholder = "senha"
					secureTextEntry={true}
					onChangeText={(password) => this.setState({password})} 
				/>

				<TouchableOpacity style={commonStyles.button} onPress={() => {
					if (this.state.email == "" || this.state.nome == "" || this.state.password == "") {
						Alert.alert('Campo não preenchido', 'Por favor, preencha todos os campos');
					} else if ( !this.validateEmail(this.state.email) ) {
						Alert.alert('Email inválido', 'Insira um email válido');
					}	else {
							this.props.navigation.navigate('FirstLogin', {
								email: this.state.email,
								nome: this.state.nome,
								password: this.state.password}
							)
						}
					}}>
					<Text style={commonStyles.text}>Cadastre-se</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
					<Text style={commonStyles.text}>Já possui uma conta?</Text>
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

export default Register;
