import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Test from "./utils/constants";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

//render to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);