import {LOGO_URL} from "../utilities/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import UserContext from "../utilities/UserContext";
import MyContext from "../utilities/MyContext";
import {useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact , setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    //subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems);
    // console.log(loggedInUser);
    useEffect( () => {
        //console.log("useEffect called");
    });
    return (
        <div className="flex justify-between border border-solid border-black rounded-md p-4 bg-green-100">
            <div className="Logo_Container">
                <img className="w-28" src= {LOGO_URL }/>
            </div>
            <div className="flex items-center">
                <ul className="flex  ">
                    <li className="p-2">onlineStatus: {onlineStatus ? "🟢  " : "🔴  "}</li>
                    <li className="p-2"><Link to= "#"> Offers </Link></li>
                    <li className="p-2"><Link to= "/"> Home </Link></li>
                    <li className="p-2"><Link to= "/about"> About Us </Link></li>
                    <li className="p-2"><Link to= "/contact"> Contat Us</Link></li>
                    <li className="p-2"><Link to= "#"> Sign in </Link></li>
                    <li className="p-2 font-bold"><Link to= "/cart" > Cart - {cartItems.length} items </Link></li>
                    <li className="p-2"><Link to= "/grocery"> Grocery </Link></li>
                    <button className="border border-solid border-black px-4 rounded-md bg-lime-300" onClick={()=>{
                        btnNameReact ==="Login" ?setBtnNameReact("Logout") :setBtnNameReact("Login");
                        console.log(btnNameReact);
                    }}>{btnNameReact}</button>
                    <li className="p-2"> {loggedInUser} </li>
                </ul>
                
            </div>
        </div>

    );
};

export default Header;