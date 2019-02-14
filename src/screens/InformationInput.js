import React from 'react';
import {
	StyleSheet, 
  Text, 
  View, 
  TextInput,  
  TouchableOpacity, 
	TouchableHighlight,
	Modal,
	Switch
} from 'react-native';
import * as firebase from 'firebase';
import { register } from '../auth';
import { commonStyles, modal, InfoInput } from '../theme'

class InformationInput extends React.Component {

	state = {
			salario: '',
			modalVisible: false,
			poupanca: false
	}

	setModalVisible = (visible) => {
		this.setState({modalVisible: visible});
	}

  render() {

		const { navigation } = this.props;
		const nome = navigation.getParam('nome', '');
		const email = navigation.getParam('email', '');
		const password = navigation.getParam('password', '');
		
    return (
      <View style={InfoInput.container}>

        <Text style={InfoInput.logo}>Quase lá! Insira suas informações abaixo: </Text>

				<Text style={InfoInput.text1}>SALÁRIO</Text>
				<TextInput style={InfoInput.input} 
					placeholder="$1000,00"
					keyboardType = 'numeric'
					onChangeText={(salario) => this.setState({salario})}
				/>

				<TouchableOpacity style={InfoInput.add} >
					<Text style={InfoInput.text2}>+</Text>
				</TouchableOpacity>

				<TouchableOpacity style={InfoInput.go} onPress={() => {
					register(email, nome, password, this.state.salario, this.props.navigation)
					}}>
				<Text style={InfoInput.text2}>Cadastre-se</Text>
				</TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
	logo: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
		marginTop: 32,
		marginBottom: 32,
	}
});

export default InformationInput;