import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/views/Home';
import SignIn from './src/views/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import DrawerNav from './src/navigators/DrawerNavigator';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {/* <DrawerNav /> */}
        <Stack.Navigator screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Sign In" component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Home /> */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    backgroundColor: 'blue',
  }
});
