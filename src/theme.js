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

