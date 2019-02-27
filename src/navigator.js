import React from 'react';

import { 
  createSwitchNavigator, 
  createMaterialTopTabNavigator 
} from 'react-navigation';

import Login from './screens/Login';
import Register from './screens/Register';

import InformationInput from './screens/InformationInput';

import Toolbar from './components/Toolbar';

import getUserRoutes from './router';

import Expenses from './components/Expenses';

const createUserNavigator = (user) => createMaterialTopTabNavigator(
  getUserRoutes(user), {tabBarComponent: props => <Toolbar {...props}/>});

const createAuthNavigator = () => createSwitchNavigator(
  {
    Login: {screen: Login},
    Register: Register,
    FirstLogin: InformationInput,
    User: createUserNavigator(),
    Expenses: Expenses
  },
  {initialRouteName: 'Login'}
);

export default createRootNavigator = (user) => {
  return createSwitchNavigator(
    {
      SignedIn: {screen: createUserNavigator(user)},
      SignedOut: {screen: createAuthNavigator()}
    },
    {initialRouteName: user ? 'SignedIn': 'SignedOut'}
  )
}
