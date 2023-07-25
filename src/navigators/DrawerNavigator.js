import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../views/Home';
import SignIn from '../views/SignIn';

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sign In" component={SignIn} />
    </Drawer.Navigator>
  );
}
export default DrawerNav