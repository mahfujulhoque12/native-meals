import { Text, View,Pressable,Image,StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealsDetails";


function MealItem ({id,title, imageUrl,duration,complexity,affordability}){

    const navigation=useNavigation();

    function selectMealItemHandaler(){
        navigation.navigate('MealDetails',{
            mealId:id
        })
    }
   
    return <View style={styles.mealItem}>
        <Pressable android_ripple={{color:'#5828'}} onPress={selectMealItemHandaler}>
       <View>
        <Image source={{uri: imageUrl}} style={styles.image}></Image>
       <Text style={styles.title}>{title}</Text>
       </View>
      <MealDetails duration={duration} affordability={affordability} complexity={complexity}></MealDetails>
        </Pressable>
    </View>
}
export default MealItem;

const styles=StyleSheet.create({
    image:{
        width:"100%",
        height:200
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        margin:8
    },
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'white',
        elevation:8
    }
})