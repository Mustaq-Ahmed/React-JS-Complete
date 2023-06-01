import { useContext } from "react";
import UserContext from "../utils/UserContext";


const Footer = () => {

    const { user } = useContext(UserContext);

    return (
        <>
            <h1 className="m-5 text-2xl font-bold">Footer Page</h1>
            <h2 className="m-5 text-xl">This site is created by : {user.name} - {user.email}</h2>
        </>
    )
}

export default Footer;