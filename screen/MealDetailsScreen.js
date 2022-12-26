import { useContext, useLayoutEffect } from "react";
import { Image, Text, View,StyleSheet,ScrollView, Button } from "react-native";
import IconButton from "../component/IconButton";
import List from "../component/MealDetails/List";
import Subtitle from "../component/MealDetails/Subtitle";
import MealDetails from "../component/MealsDetails";
import { MEALS } from "../data/dummy-data";
import { FavouriteContext } from "../store/context/Favorite-context";


function MealDetailsScreen({route,navigation}){
    const favoriteMealsContext=useContext(FavouriteContext);

    const mealId=route.params.mealId;
    const selectMeals=MEALS.find((meal)=>meal.id===mealId);

    const mealsIsFavorite=favoriteMealsContext.ids.includes(mealId)

    function changeFavoriteStatusHandaler(){
       if(mealsIsFavorite){
        favoriteMealsContext.removeFavorite(mealId)
       }else{
        favoriteMealsContext.addFavorite(mealId)
       }
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton
                 icon={mealsIsFavorite ? 'star':'star-outline'}
                 color="white" 
                 onPress={changeFavoriteStatusHandaler}
                 ></IconButton>
            }
        })
    },[navigation,changeFavoriteStatusHandaler])

    return <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{uri:selectMeals.imageUrl}}></Image>
        <Text style={styles.title}>{selectMeals.title}</Text>
        <MealDetails duration={selectMeals.duration} complexity={selectMeals.complexity} affordability={selectMeals.affordability}></MealDetails>

        <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
        <Subtitle>Ingridents</Subtitle>
         <List data={selectMeals.ingredients}></List>
        <Subtitle>Steps</Subtitle>
       <List data={selectMeals.steps}></List>
        </View>
        </View>

    </ScrollView>
}
export default MealDetailsScreen;

const styles=StyleSheet.create({
    rootContainer:{
        marginBottom:32
    },
    image:{
        width:"100%",
        height:350,
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        margin:8,
        textAlign:'center',
    },
    listContainer:{
        width:'80%'
    },
    listOuterContainer:{
        alignItems:'center'
    }
})