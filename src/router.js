import { 
  createSwitchNavigator, 
  createMaterialTopTabNavigator 
} from 'react-navigation';

import Login from './screens/Login';
import Register from './screens/Register';

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

export const createUserNavigator = () => createMaterialTopTabNavigator(UserRoutes);


export const createAuthNavigator = () => createSwitchNavigator(
  {
    Login: Login,
    Register: Register,
    User: createUserNavigator()
  },
  {initialRouteName: 'User'}
);
