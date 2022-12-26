import {FlatList} from 'react-native'
import CategoryGridTile from '../component/CategoryGridTile';
import { CATEGORIES} from '../data/dummy-data';


function CategoriesScreen({navigation}){
    
function randerCategoryItem(itemData){

    function pressHandaler(){
        navigation.navigate("MealsOverview",{
            categoryId:itemData.item.id
        })
    }
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandaler} navigation={navigation}></CategoryGridTile>
}
    return <FlatList 
    data={CATEGORIES}
    keyExtractor={(item)=>item.id} 
    renderItem={randerCategoryItem}
    numColumns={2}
     />
}
export default CategoriesScreen;