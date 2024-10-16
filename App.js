import Navigator from './Components/Navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {

  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
}
