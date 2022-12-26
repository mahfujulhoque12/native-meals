import { View,Text,StyleSheet } from "react-native";

function Subtitle({children}){
    return  <View style={styles.subtitleContainer}>
    <Text style={styles.subtitle}>{children}</Text>
    </View>

}
export default Subtitle;

const styles=StyleSheet.create({
    subtitle:{
        color:'#EC0E19',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
    },
    subtitleContainer:{
        borderBottomColor:"#AC2E35",
        borderBottomWidth:2,
        marginHorizontal:12,
        padding:6,
        marginVertical:4
    }
})