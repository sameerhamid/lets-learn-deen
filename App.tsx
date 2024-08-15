import React from 'react';
import AppNavigation from './src/common/routes/appNavigation';

import Config from 'react-native-config';

function App(): React.JSX.Element {
  console.log('config>>>', Config.BASIC_URL);
  return <AppNavigation />;
}

export default App;
