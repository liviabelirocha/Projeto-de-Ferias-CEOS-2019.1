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

export const UserRoutes = {
  Financas: {
    screen: Financas,
    title: 'Finanças'
  },
  Historico: {
    screen: Historico, 
    title: 'Histórico'
  },
  Ajustes: {
    screen: Ajustes,
    title: 'Ajustes'
  },
  Logout: {
    screen: Logout,
    title: 'Logout'
  }
};

const createUserNavigator = () => createMaterialTopTabNavigator(UserRoutes);


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
