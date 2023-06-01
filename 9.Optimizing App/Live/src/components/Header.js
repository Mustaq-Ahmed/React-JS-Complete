import { useState } from "react";
// import { LOGO_URL } from "../utils/constants";
import logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isOnline = useOnline();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="App-Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    {/* <Link to="/">Home</Link> */}
                    {/* <li>About Us</li> */}
                    {/* <li>Contact Us</li> */}
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/instamart">InstaMart</Link>
                    </li>
                    <li>Cart</li>
                {/* {isOnline ? "✅" : "❌"} */}
                </ul>
            </div>
            {
                isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}> LogOut </button> :
                    <button onClick={() => setIsLoggedIn(true)}> LogIn </button>
            }

        </div>
    )
}

export default Header;