import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./components/Cart";
// import InstaMart from "./components/InstaMart";

const InstaMart = lazy(() => import("./components/InstaMart"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {

    const [user, setUser] = useState({
        name: "Mustaq Ahmed",
        email: "mustaq@gmail.com",
    })

    return (
        <Provider store={store}>
            <UserContext.Provider value={{
                user: user,
                setUser: setUser,
            }}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: (
                    <Suspense>
                        <About />
                    </Suspense>
                ),
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    },
                    {
                        path: "profileclass",
                        element: <ProfileClass />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:menuId",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <InstaMart />
                    </Suspense>
                )
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    },
    // {
    //     path: "/",
    //     element: <AppLayout />,
    //     errorElement: <ErrorPage />
    // },
    // {
    //     path: "/about",
    //     element: <About />
    // }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);




