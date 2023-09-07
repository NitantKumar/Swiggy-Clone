import RestaurantCard from "./Restaurant_Card";
import { useState, useEffect } from "react";
//import reslist_latest from "../utils/mock_data_latest"; //no need anymore!!!
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&collection=94613&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null');
        const json = await data.json();
        const Live_Res_List = json?.data?.cards?.splice(2,13);
        setListOfRestaurants(Live_Res_List)
    }

    return ( 
        <div className = "body">
            <div className="filter">
                <button 
                    className="filter-bttn"
                    onClick={() => {
                        // const filteredList = listOfRestaurants.filter((res) => (res.info.avgRating >= 4.0))
                        // setListOfRestaurants(filteredList);
                        setListOfRestaurants(listOfRestaurants.filter((res) => (res?.card?.card?.info?.avgRating >= 4.0)));
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className = "restaurant-container">
            {
                listOfRestaurants.map((restaurant) => (<RestaurantCard key = {restaurant?.card?.card?.info?.id} resData = {restaurant}/>))
            }
            </div>
        </div>
    );
}

export default Body;