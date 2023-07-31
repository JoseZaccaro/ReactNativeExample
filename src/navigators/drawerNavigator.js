import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../views/Home.js';
import Mangas from '../views/Mangas.js';
import menu from '../../assets/Menu.png';
import { Image } from 'react-native';
import TabsNavigator from './tabsNavigator.js';

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown:false
            // title:'Minga'
            // drawerIcon: () => <Image source={menu} />
        }}>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Mangas" component={TabsNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator