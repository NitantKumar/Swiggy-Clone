import ItemList from "./ItemList";

const Restaurant_Catagories = ({data, show, setShowIndex}) => {
    if (data?.itemCards!=null && data?.itemCards != undefined){
        itemCardsInfo = data?.itemCards;
    }
    console.log(itemCardsInfo);

    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={() => {
                setShowIndex();
            }}>
                <span className="font-bold text-lg text-gray-700">{data.title} ({itemCardsInfo.length > 1 ? itemCardsInfo.length : "1"})</span>
                <span> {show == false ? "⬇️" : "⬆️"} </span>
            </div>
            {
                show == false ? null : <ItemList data = {itemCardsInfo}/>
            }
            
        </div>
    )
}

export default Restaurant_Catagories;