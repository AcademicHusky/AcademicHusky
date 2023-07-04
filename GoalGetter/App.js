import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Sidebar from './components/Sidebar';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

const App = () => {
  return (
    <Provider store={Store}>
    <Sidebar />
    </Provider>
  )
}
/* Test 1 2 3 */

export default App;