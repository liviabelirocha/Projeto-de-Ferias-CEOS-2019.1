import React from 'react';
import {	StyleSheet, 
			Text, 
			View, 
			TextInput, 
			TouchableOpacity, 
			TouchableHighlight,
			StatusBar
		} from 'react-native';

export class Financas extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>FINANÇAS</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#363640',
		paddingTop: 56,
		alignItems: 'center'
	}
});