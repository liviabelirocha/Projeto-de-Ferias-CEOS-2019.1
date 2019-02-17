import React from 'react';

import { 
  createSwitchNavigator, 
  createMaterialTopTabNavigator 
} from 'react-navigation';

import Login from './screens/Login';
import Register from './screens/Register';

import InformationInput from './screens/InformationInput';
import Financas from './screens/Financas';
import Historico from './screens/Historico';
import Ajustes from './screens/Ajustes';
import Logout from './screens/Logout';

import Toolbar from './components/Toolbar';

export const UserRoutes = {
  Financas: {
    screen: Financas,
    title: 'Finanças',
    icon: 'pie-chart'
  },
  Historico: {
    screen: Historico, 
    title: 'Histórico',
    icon: 'clock'
  },
  Ajustes: {
    screen: Ajustes,
    title: 'Ajustes',
    icon: 'settings'
  },
  Logout: {
    screen: Logout,
    title: 'Logout',
    icon: 'log-out'
  }
};

const createUserNavigator = () => createMaterialTopTabNavigator(
  UserRoutes, {tabBarComponent: props => <Toolbar {...props}/>});

const createAuthNavigator = () => createSwitchNavigator(
  {
    Login: {screen: Login},
    Register: Register,
    FirstLogin: InformationInput,
    User: createUserNavigator()
  },
  {initialRouteName: 'Login'}
);

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {screen: createUserNavigator()},
      SignedOut: {screen: createAuthNavigator()}
    },
    {initialRouteName: signedIn ? 'SignedIn': 'SignedOut'}
  )
}
