import { StyleSheet } from 'react-native';

export const colors = {
  primary: "#363640",
  primaryDark: "#2B2B32",
  primaryLight: "#454650",
  accent: "rgba(255, 255, 255, 0.6)",

  yellow: "#FFCF44",
  lightGreen: "#1EB980",
  green: "#045D56",
  blue: "#72DEFF"
};

export const commonStyles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
  },
  
	input: {
		backgroundColor: colors.primaryLight,
		paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 8,
		width: 280, 
		height: 56,
    borderBottomWidth: 1,
    borderBottomColor: colors.accent,
    color: 'white'
	},

	button: {
		backgroundColor: colors.primaryLight,
		paddingLeft: 12,
		paddingRight: 12,
    marginBottom: 8,
		width: 280,
		height: 56,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
		color: 'white',
		fontSize: 15,
  },
  
  onSurfaceText: {...this.text, color: colors.accent},

  icon: {
    width: 24,
    height: 24,
    color: colors.accent
  },

  selectedIcon: {...this.icon, color: 'white'}
});

export const InfoInput = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: colors.primary,
  },
  
  logo: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
		marginTop: 32,
		marginBottom: 32,
  },
  
  text1: {
		color: 'white',
		fontSize: 15,
		paddingLeft: 12,
		marginBottom: 12,
  },
  
  input: {
		backgroundColor: colors.primaryLight,
		paddingLeft: 12,
		paddingRight: 12,
		width: 140, 
		height: 28,
		marginLeft: 12,
		marginBottom: 12,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: colors.accent,
  },
  
  add: {
		backgroundColor: 'white',
		width: 64,
		height: 64,
		borderRadius: 100,
		position: 'absolute',
		bottom: 12,
		left: 12,
		paddingTop: 12,
		paddingLeft: 24,
  },
  
  go: {
		backgroundColor: 'white',
		width: 220,
		height: 64,
		alignItems: 'center',
		position: 'absolute',
		bottom: 12,
		right: 12,
		borderRadius: 100,
		paddingTop: 12,
  },

  text2: {
		color: 'black',
		fontSize: 24,
	},
  
});