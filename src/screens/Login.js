import React from 'react';
import {	
  StyleSheet, 
  Text, 
  View, 
  TextInput,  
  TouchableOpacity, 
  TouchableHighlight 
} from 'react-native';
import { login } from '../auth';
import { commonStyles } from '../theme';
class Login extends React.Component {

  state = {
    email: '',
    password: ''
  };

	render() {
		return (
			<View style={commonStyles.container}>
				<Text style={styles.logo}>Logo Aqui</Text>
				<TextInput style={commonStyles.input}
          placeholder='email'
          keyboardType='email-address'
          autoCapitalize='none'
					onChangeText = {(email) => this.setState({email})} 
				/>
				<TextInput style={commonStyles.input}
					placeholder ='senha'
					secureTextEntry={true}
					onChangeText = {(password) => this.setState({password})}
				/>
				<TouchableOpacity style={commonStyles.button} onPress={() => login(this.state.email, this.state.password, this.props.navigation)}>
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
