import React from 'react';

import Financas from './screens/Financas';
import Historico from './screens/Historico';
import Ajustes from './screens/Ajustes';
import Logout from './screens/Logout';

export default getUserRoutes = (user) => {
  return {
    Financas: {
      screen: () => <Financas user={user}/>,
      title: 'Finanças',
      icon: 'pie-chart'
    },
    Historico: {
      screen: () => <Historico user={user}/>, 
      title: 'Histórico',
      icon: 'clock'
    },
    Ajustes: {
      screen: () => <Ajustes user={user}/>,
      title: 'Ajustes',
      icon: 'settings'
    },
    Logout: {
      screen: () => <Logout user={user}/>,
      title: 'Logout',
      icon: 'log-out'
    }
  };
};
