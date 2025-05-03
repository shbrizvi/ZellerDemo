import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';
import ProfileListScreen from '../screens/AllProfileList/ProfileListScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function RouteManager() {
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen name="HomePage" 
        component={HomePage} 
        options={{ headerShown: false}}
        />
      <Stack.Screen
        name="ProfileListScreen"
        component={ProfileListScreen}
        options={{ headerShown: true, title: 'ZellerCustomer' }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: true, title: 'Profile' }}
      />
    </Stack.Navigator>
  );
}