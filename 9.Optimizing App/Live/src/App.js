import React, { lazy, Suspense } from "react";
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
// import InstaMart from "./components/InstaMart";

const InstaMart = lazy(() => import("./components/InstaMart"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {

    return (
        <div className="app">
            <Header />
            {/* <About />
            <Body />
            <Contact /> */}
            <Outlet />
            <Footer />
        </div>
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




