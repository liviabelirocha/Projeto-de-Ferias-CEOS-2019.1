import React from 'react';
import {
	StyleSheet, 
  Text, 
  View, 
  TextInput,  
  TouchableOpacity, 
	CheckBox,
	Alert
} from 'react-native';
import * as firebase from 'firebase';
import { register } from '../auth';
import { commonStyles } from '../theme'

class InformationInput extends React.Component {

	state = {
			salario: '',
			poupanca: false
	}

	toggleCheckBox = () => {
		this.setState({ poupanca: !this.state.poupanca });
	}

  render() {

		const { navigation } = this.props;
		const nome = navigation.getParam('nome', '');
		const email = navigation.getParam('email', '');
		const password = navigation.getParam('password', '');

    return (
      <View style={commonStyles.container}>

				<Text style={styles.logo}>Quase lá! Insira algumas informações abaixo: </Text>

				<Text style={styles.text}>SALÁRIO</Text>
				<TextInput style={commonStyles.input} 
					placeholder="$1000,00"
					keyboardType = 'numeric'
					onChangeText={(salario) => this.setState({salario})} />

				<Text style={styles.text}>POUPANÇA</Text>
				<Text style={commonStyles.text}>A poupança separa 10% do seu salário todo mês</Text>

				<CheckBox value={this.state.poupanca} onChange={() => this.toggleCheckBox()} style={styles.CheckBox}/>

				<TouchableOpacity style={commonStyles.button} onPress={() => {
					if(this.state.salario == '') {
						Alert.alert('Campo não preenchido', 'Por favor, preencha todos os campos');
					} else {
						register(email, nome, password, this.state.salario, this.state.poupanca, this.props.navigation)}}
					}>
					<Text style={commonStyles.text}>Cadastre-se</Text>
				</TouchableOpacity>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	logo: {
		color: 'white',
		fontSize: 20,
		marginTop: 32,
		marginBottom: 32,
	},

	text: {
		marginBottom: 10,
		fontSize: 20,
		color: 'white',
		marginTop: 20
	},

	CheckBox: {
		marginTop: 10,
		marginBottom: 45
	}
});

export default InformationInput;