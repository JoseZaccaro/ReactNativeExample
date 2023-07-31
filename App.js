import { StatusBar, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Home from './src/views/Home';
import StackNavigator from './src/navigators/stackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigators/drawerNavigator';


export default function App() {
  // TouchableHighlight
  // TouchableOpacity
  return (
    <NavigationContainer>
      <StatusBar hidden />
      {/* <StackNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  imagenLogo: {
    height: 60,
    objectFit: 'contain',
  },
  navbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  textWhite: {
    color: 'white',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center'
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },


});
