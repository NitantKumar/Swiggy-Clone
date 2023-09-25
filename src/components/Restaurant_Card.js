import { Res_Photo } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime, locality} = resData?.card?.card?.info;
    return( 
        <div className = "m-4 p-4 w-[250px] rounded-md bg-fuchsia-100 hover:bg-fuchsia-200">
            <img className = "rounded-md" src = {Res_Photo + cloudinaryImageId} />
            <h3 className="font-bold pt-1 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{locality}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )

}

export const withPromotedLabel = (Restaurant_Card) => {
    return (props) => {
        return (
            <div>
                <label className="absolute px-2 rounded-md bg-slate-600 text-gray-200">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;