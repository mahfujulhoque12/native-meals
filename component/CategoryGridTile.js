import { Pressable, Text, View,StyleSheet,Platform} from "react-native";
import { useNavigation } from "@react-navigation/native";

function CategoryGridTile({title,color,onPress}){
    const navigation=useNavigation();
    
return <View style={[styles.gridItem,{backgroundColor:color}]}>
    <Pressable style={styles.button} android_ripple={{color:'#CCC'}} onPress={onPress}>
        <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
        </View>
    </Pressable>
</View>

}
export default CategoryGridTile;

const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        overflow:Platform.OS==='android'?'hidden':'visible'
    },
    button:{
        flex:1
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    },
  
})