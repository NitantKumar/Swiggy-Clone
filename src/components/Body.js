import RestaurantCard, {withPromotedLabel} from "./Restaurant_Card";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "react";
import UserContext from "../utils/UserContext";
//import reslist_latest from "../utils/mock_data_latest"; //no need anymore!!!
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilterdList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&collection=94613&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    const Live_Res_List = json?.data?.cards?.splice(2, 13);
    setListOfRestaurants(Live_Res_List);
    setFilterdList(Live_Res_List);
  };

  const {loggedInUser, setUserName } = useContext(UserContext);

  const isOnline = useOnlineStatus();
  if(isOnline === false){return(<div>Looks like you are offline! Please check your internet and try again.</div>)}

  PromotedRestaurantCard = withPromotedLabel(RestaurantCard)

  //conditonal rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-gray-500"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="mx-4 px-2 py-0.5 rounded-md bg-gray-500"
            onClick={() => {
              console.log(searchText);
              setFilterdList(
                listOfRestaurants.filter((res) =>
                  res?.card?.card?.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="p-1 rounded-md bg-gray-300"
            onClick={() => {
              // const filteredList = listOfRestaurants.filter((res) => (res.info.avgRating >= 4.0))
              // setListOfRestaurants(filteredList);
              setFilterdList(
                listOfRestaurants.filter(
                  (res) => res?.card?.card?.info?.avgRating >= 4.0
                )
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div>
          <label className="bold mx-2">UserName: </label>
          <input
          value = {loggedInUser} 
          onChange={(e) => setUserName(e.target.value)} />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.card?.card?.info?.id}
            key={restaurant?.card?.card?.info?.id}
          >
            {restaurant?.card?.card?.info?.promoted ? <PromotedRestaurantCard resData = {restaurant} /> : <RestaurantCard resData={restaurant} />}
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
