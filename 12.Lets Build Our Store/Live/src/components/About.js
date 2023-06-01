import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";


class About extends React.Component {

    constructor(props){
        super(props);
        // console.log("PARENT - constructor");
    }

    componentDidMount() {
        // console.log("PARENT - componentDidMount");
    }

    render() {
        // console.log("PARENT - render");
        return (
            <>
                <h1>About Us Page</h1>
                <p>This is About Us page for Food Application</p>
                {/* <Outlet /> */}
                <Profile />
                {/* <ProfileClass name={"Mustaq"} /> */}
            </>
        )
    }
}

export default About;




// const AboutFunctional = () => {
//     return (
//         <p>
//             <h1>About Us Page</h1>
//             <p>This is About Us page for Food Application</p>
//             {/* <Outlet /> */}
//             <Profile />
            // <ProfileClass name={"Mustaq"}/>
//         </>
//     )
// }