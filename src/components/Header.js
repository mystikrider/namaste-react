import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [loginText, setLoginText] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="header flex justify-between items-center sm:bg-green-100 md:bg-amber-100 lg:bg-pink-100 bg-blue-100 p-4 shadow-md">
            <div className="logo-container">
                <img className="logo w-30" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex items-center">
                    <li className="mx-3">Online : {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="mx-3"><Link to="/">Home</Link></li>
                    <li className="mx-3"><Link to="/about">About</Link></li>
                    <li className="mx-3"><Link to="/contact">Contact</Link></li>
                    <li className="mx-3 font-bold">User: {loggedInUser}</li>
                    <li className="mx-3">
                        <button className="bg-green-700 text-white p-2 rounded-sm" onClick={() => {
                            loginText === "Login" ? setLoginText("Logout") : setLoginText("Login")
                        }}>{loginText}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;