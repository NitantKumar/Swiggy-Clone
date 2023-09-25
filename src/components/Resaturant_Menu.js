import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Restaurant_Catagories from "./RestaurantCatagories";
import { useState } from "react";

const Restaurant_Menu = () => {

    const {resId} = useParams();

    // console.log(resId);

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(-1);

    if(resInfo === null){ return <Shimmer/>}

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const cardItems = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => (item?.card?.card?.["@type"].includes("ItemCategory")));
    // console.log(categories);
    
    return(
        <div className="text-center">
            <h2 className="font-bold mx-4 my-2 text-2xl">{name}</h2>
            <h3 className="font-bold text-lg my-2 mx-2">{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            {
                categories.map((category, index) => (
                <Restaurant_Catagories key={category?.card?.card?.title} data = {category?.card?.card} 
                    show = {index === showIndex ? true : false}
                    setShowIndex = {() => {index === showIndex ? setShowIndex(-1) : setShowIndex(index)}}/>))
            }
        </div>
    )
}

export default Restaurant_Menu;