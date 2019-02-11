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

class InformationInput extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			salario: '',
		};
	}

	sendInitialInfo(salario) {
		let user = firebase.auth().currentUser;
		firebase.database().ref('users/' + user.uid).update({
			salario: salario,
		});
		this.props.navigation.push('Financas');
	}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Bem Vindo(a), insira suas informações abaixo: </Text>
				<Text style={styles.text}>SALÁRIO</Text>
				<TextInput style={styles.input} 
					placeholder="$1000,00"
					keyboardType = 'numeric'
					onChangeText={(salario) => this.setState({salario})}
				/>
				<TouchableOpacity style={styles.button} onPress={() => this.sendInitialInfo(this.state.salario)}>
					<Text style={styles.text}>GO</Text>
				</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#363640',
	},

	logo: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
		marginTop: 32,
		marginBottom: 32,
	},

	input: {
		backgroundColor: '#454650',
		paddingLeft: 12,
		paddingRight: 12,
		width: 140, 
		height: 28,
		marginLeft: 12,
		marginBottom: 12,
		color: 'white',
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
		paddingLeft: 12,
		marginBottom: 12,
	}
});

export default InformationInput;
