import React from 'react';
import AppNavigation from './src/common/routes/appNavigation';

import {StudentProvider} from './src/common/context/StudentContext';

function App(): React.JSX.Element {
  return (
    <StudentProvider>
      <AppNavigation />
    </StudentProvider>
  );
}

export default App;
