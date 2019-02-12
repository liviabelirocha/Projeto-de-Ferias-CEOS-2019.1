import React from 'react';
import {	
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  TouchableHighlight,
  StatusBar
} from 'react-native';
import * as firebase from 'firebase';
import { commonStyles } from '../theme';

class InformationInput extends React.Component {

  state = {
    salario: '',
    user: firebase.auth().currentUser
  };

	sendInitialInfo(salario) {
		let user = firebase.auth().currentUser;
		firebase.database().ref('users/' + user.uid).update({
			salario: salario,
		});
		this.props.navigation.navigate('User');
	}

  render() {
    return (
      <View style={commonStyles.container}>
        <Text style={styles.logo}>Bem vindo, {this.state.user.email}, insira suas informações abaixo: </Text>
				<Text style={commonStyles.text}>SALÁRIO</Text>
				<TextInput style={commonStyles.input} 
					placeholder="$1000,00"
					keyboardType = 'numeric'
					onChangeText={(salario) => this.setState({salario})}
				/>
				<TouchableOpacity style={commonStyles.button} onPress={() => this.sendInitialInfo(this.state.salario)}>
					<Text style={commonStyles.text}>GO</Text>
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
