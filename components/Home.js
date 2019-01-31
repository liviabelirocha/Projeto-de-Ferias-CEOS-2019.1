import React from 'react';
import {  StyleSheet, 
					Text, 
					View, 
					TextInput,  
					TouchableOpacity, 
					TouchableHighlight 
				} from 'react-native';

export class Home extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.logo}>Logo Aqui</Text>
				<TextInput style={styles.input}
					placeholder = "usuário"
				/>
				<TextInput style={styles.input}
					placeholder = "senha"
				/>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.text}>LOGIN</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.text}>Não possui uma conta? Cadastre-se</Text>
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
