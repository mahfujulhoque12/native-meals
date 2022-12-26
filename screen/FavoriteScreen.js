import {StyleSheet,View,Text} from 'react-native';
import { useContext } from "react";
import MealList from "../component/MealsList/MealList";
import { MEALS } from "../data/dummy-data";
import { FavouriteContext } from "../store/context/Favorite-context";

function FavoriteScreen(){

    const favoriteMealsContext=useContext(FavouriteContext);

    const favoriteMeals=MEALS.filter((meal) =>favoriteMealsContext.ids.includes(meal.id))

    if(favoriteMeals.length===0){
        return (
            <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favorite meals yeat</Text>
        </View>
        )
    }

    return <MealList items={favoriteMeals}/>
}
export default FavoriteScreen;

const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})