import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { Res_Photo } from "../utils/constants";

const ItemList = ({data}) => {
    const dispatch = useDispatch();
    const handleAddItem = () => {
        dispatch(addItem("pizza"));
    };
    // console.log(data);
    return (
        <div>
                {data.map((item) => (
                <div key = {item.card.info.id} className = "bg-slate-100 shadow-md rounded-lg p-4 m-2">
                    <div className="flex justify-between">
                        <div>
                            <span>{item.card.info.name}</span>
                            <span className="mx-4">₹{item.card.info.price/100}</span>
                        </div>
                        <div className="">
                            <img className="w-32" src={Res_Photo + item.card.info.imageId}></img>
                            <div className="bg-gray-200 text-slate-500 ">
                                <span className="ml-1 mr-4 cursor-pointer">-</span>
                                <span>Add</span>
                                <span className="ml-1 mr-4 cursor-pointer" onClick={handleAddItem}>+</span>
                            </div>
                        </div>
                    </div>
                    {
                        (item.card.info.description != null && item.card.info.description != undefined)
                        ? <p className="text-gray-500 text-left mt-4">{item.card.info.description}</p>
                        : null
                    }
                </div>
                ))}
        </div>
    )
}

export default ItemList; 