import { StyleSheet } from 'react-native';

export const colors = {
  primary: "#363640",
  primaryDark: "#2B2B32",
  primaryLight: "#454650",
  accent: "rgba(255, 255, 255, 0.6)",

  lightGreen: "#1EB980",
  green: "#045D56",
  yellow: "#FFCF44",
  blue: "#72DEFF",
  purple: "#B15DFF",
  orange: "#FF6859",
};

const textPadding = 12;
const padding = 16;
const margin = 8;
const iconSize = 24;

export const commonStyles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: colors.primary,
		alignItems: 'center',
    justifyContent: 'center',
    padding: padding
  },
  
	input: {
		backgroundColor: colors.primaryLight,
		paddingLeft: textPadding,
    paddingRight: textPadding,
    marginBottom: margin,
		width: 280, 
		height: 56,
    borderBottomWidth: 1,
    borderBottomColor: colors.accent,
    color: '#fff',
    fontSize: 15,
    fontFamily: 'sans-serif-light'
	},

	button: {
		backgroundColor: colors.primaryLight,
		paddingLeft: textPadding,
		paddingRight: textPadding,
    marginBottom: margin,
		width: 280,
		height: 56,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
		color: '#fff',
    fontSize: 15,
    fontFamily: 'sans-serif-light',
    letterSpacing: 1,
  },
  
  onSurfaceText: {
    color: colors.accent,
    fontSize: 15,
    fontFamily: 'sans-serif-light',
    letterSpacing: 1,
    textAlign: 'center'
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
    letterSpacing: 2,
    marginBottom: margin
  },

  icon: {
    width: iconSize,
    height: iconSize,
    color: colors.accent
  }
});
