import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{createDrawerNavigator} from '@react-navigation/drawer'
import {Ionicons} from '@expo/vector-icons'
import CategoriesScreen from './screen/CategoriesScreen';
import MealsOverviewScreens from './screen/MealsOverviewScreens';
import MealDetailsScreen from './screen/MealDetailsScreen';
import FavoriteScreen from './screen/FavoriteScreen'
import FavoriteContextProvider from './store/context/Favorite-context';

const Stack=createNativeStackNavigator();
const Drawer=createDrawerNavigator();

function DrawerNavigator(){
  return<Drawer.Navigator
  screenOptions={{
    headerStyle:{backgroundColor:'#328472'},
    headerTintColor:'white',
    ScreenContentStyle:{backgroundColor:"pink"},
    drawerContentStyle:{backgroundColor:"#351401"},
    drawerInactiveTintColor:"white",
    drawerActiveTintColor:"orange"
}}
  useLegacyImplementation>
  <Drawer.Screen name="Category" component={CategoriesScreen} options={{
    title:'All Categories',
    drawerIcon:({color,size})=> <Ionicons name='list' color={color} size={size}/>
  }} />
  <Drawer.Screen name="Favorite" component={FavoriteScreen}  options={{
   
    drawerIcon:({color,size})=> <Ionicons name='star' color={color} size={size}/>
  }} />
</Drawer.Navigator>
}

export default function App() {
  return (
   <>
    <StatusBar style='light'/>
    <FavoriteContextProvider> 
   <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:'#328472'},
        headerTintColor:'white',
        contentStyle:{backgroundColor:"pink"}
        
    }}>
      <Stack.Screen name="Drawer" component={DrawerNavigator} options={{
        headerShown:false
        
      
        }}/>

      <Stack.Screen name="MealsOverview" component={MealsOverviewScreens}/>

       <Stack.Screen name="MealDetails" component={MealDetailsScreen} options={{
        title:'About the meal'
       }} />
    </Stack.Navigator>
  
   </NavigationContainer>
   </FavoriteContextProvider>
   </>
  );
}

const styles = StyleSheet.create({
  container: {}
   
});
