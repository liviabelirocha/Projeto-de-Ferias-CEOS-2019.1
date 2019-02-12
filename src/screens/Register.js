import React from 'react';
import {	
  StyleSheet, 
  Text, 
  View, 
  TextInput,  
  TouchableOpacity
} from 'react-native';
import { register } from '../auth';
import { commonStyles } from '../theme';

class Register extends React.Component {

  state = {
    email: '',
    nome: '',
    password: '',
  };

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
				<TouchableOpacity style={commonStyles.button} onPress={() => register(this.state.email, this.state.nome, this.state.password, this.props.navigation)}>
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
