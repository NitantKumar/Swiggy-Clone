import { Res_Photo } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime, locality} = resData?.card?.card?.info;
    return( 
        <div className = "restaurant-card" style = {{background: "wheat"}}>
            <img className = "restaurant-photo" src = {Res_Photo + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{locality}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )

}

export default RestaurantCard;