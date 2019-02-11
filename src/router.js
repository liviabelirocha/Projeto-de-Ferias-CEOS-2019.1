import { 
  createSwitchNavigator, 
  createMaterialTopTabNavigator 
} from 'react-navigation';

import Login from './screens/Login';
import Register from './screens/Register';
import Financas from './screens/Financas';


export const createUserNavigator = () => createMaterialTopTabNavigator(
  {
    Financas: Financas
  },
  {initialRouteName: 'Financas'}
);


export const createAuthNavigator = () => createSwitchNavigator(
  {
    Login: Login,
    Register: Register,
    User: createUserNavigator()
  },
  {initialRouteName: 'Login'}
);
