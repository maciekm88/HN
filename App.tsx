import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

//Components
import Navigation from './src/navigation/Index';

const App: React.FC = (): JSX.Element | null => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
