import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utils/const";
import { useState } from "react";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {

    const [btnname, setbtnname] = useState("Login")
    console.log("header Render")
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src={LOGO_URL}
                />

            </div>
            <div className="nav-items">
                <ul>
                <li>online-status:{onlineStatus?"✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className="login"
                        onClick={() => {
                            btnname == "Login" ? setbtnname("Logout") : setbtnname("Login")
                        }}> {btnname}</button>
                </ul>
            </div>
        </div>
    );
};


export default Header;