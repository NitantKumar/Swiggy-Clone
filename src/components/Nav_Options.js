import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Nav_Options = () => {
    const [btnName, setBtnName] = useState("Login");
    const isOnline = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <ul className="flex p-4 m-4">
        <li className="px-4">Online Status: {isOnline === true ? "🙂" : "🙃"}</li>
        <li className="px-4"><Link to="/">Home</Link></li>
        <li className="px-4"><Link to="/about">About Us</Link></li>
        <li className="px-4"><Link to="/contact">Contact Us</Link></li>
        <li className="px-4"><Link to="/groceries">Groceries</Link></li>
        <li className="px-4">Cart ({cartItems.length})</li>
        <button onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
        }}>{btnName}</button>
        <li className="px-4 bold">{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Nav_Options;
