import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
    const [userName, setUserName] = useState("Sethu");
    // Authentication - API call to send username and password and get response
    useEffect(() => {
        const data = {
            user: "Renjith R"
        }
        setUserName(data.user)
    }, []);
    
    


    return (
        <Provider store={appStore}>
            <div className="app">
                <UserContext.Provider value={{
                    loggedInUser: userName, setUserName
                }}>
                <Header />
                
                <Outlet /></UserContext.Provider>
            </div>
        </Provider>
    )
}

//lazy loading//chunking/dynamic import/code splitting
const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <ErrorPage />
    }
])

//render to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);