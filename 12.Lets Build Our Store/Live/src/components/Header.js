import { useState, useContext } from "react";
// import { LOGO_URL } from "../utils/constants";
import logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { user } = useContext(UserContext);
    const isOnline = useOnline();

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-100">
            <div className="logo-container">
                <img className="h-28 p-2" src={logo} alt="App-Logo" />
            </div>
            <div className="nav-items">
                <ul className="flex py-10">
                    {/* <Link to="/">Home</Link> */}
                    {/* <li>About Us</li> */}
                    {/* <li>Contact Us</li> */}
                    <li className="px-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/instamart">InstaMart</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/cart">Cart-{cartItems.length} items</Link>
                    </li>
                    {/* {isOnline ? "✅" : "❌"} */}
                </ul>
            </div>
            <span className="p-10 font-bold">{user.name} - {user.email}</span>
            {
                isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}> LogOut </button> :
                    <button onClick={() => setIsLoggedIn(true)}> LogIn </button>
            }

        </div>
    )
}

export default Header;