import {createContext, useState} from 'react';


export const FavouriteContext=createContext({
    ids:[],
    addFavorite:(id)=>{},
    removeFavorite:(id)=>{},
});

function FavoriteContextProvider({children}){
       const [favoriteMealIds,setFavoriteMealIds]=useState([]);

     function  addFavorite(id){
        setFavoriteMealIds((currentFavIds)=>[currentFavIds,id])
     };
    
     function removeFavorite(id){
        setFavoriteMealIds((currentFavIds)=>currentFavIds.filter((mealId)=>mealId !==id))
     };

     const value={
        ids:favoriteMealIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite,

     }

    return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>
}

export default FavoriteContextProvider;