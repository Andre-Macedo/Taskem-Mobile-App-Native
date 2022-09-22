import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';

import Navigation from './navigation';

export default function App() {
  const { isLoadingComplete, accessToken } = useCachedResources();


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation accessToken={accessToken} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
