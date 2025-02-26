import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [loginText, setLoginText] = useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>
                        <button onClick={() => {
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