import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mangas from '../views/Mangas';
import Manga from '../views/Manga';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

function TabsNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown:false,
        }}>
            <Tab.Screen name="MangasTab" component={Mangas} options={{
                tabBarIcon: () => <Text>📚</Text>
            }}/>
            <Tab.Screen name="Manga" component={Manga} options={{
                tabBarIcon: () => <Text>📗</Text>,
                tabBarLabel:'Manga Detail',
                tabBarBadge:'5'
            }}/>
        </Tab.Navigator>
    );
}

export default TabsNavigator