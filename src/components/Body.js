import RestaurantCard from "./Restaurant_Card";
import { useState, useEffect } from "react";
import resList from "../utils/mock_data";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    useEffect(() => {
        console.log("useEffect Called");
    }, []);
    return ( 
        <div className = "body">
            <div className="filter">
                <button 
                    className="filter-bttn"
                    onClick={() => {
                        // const filteredList = listOfRestaurants.filter((res) => (res.info.avgRating >= 4.0))
                        // setListOfRestaurants(filteredList);
                        setListOfRestaurants(listOfRestaurants.filter((res) => (res.info.avgRating >= 4.0)));
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className = "restaurant-container">
            {
                listOfRestaurants.map((restaurant) => (<RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>))
            }
            </div>
        </div>
    );
}

export default Body;