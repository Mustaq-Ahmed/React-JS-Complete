import { useEffect, useState } from "react";

const InstaMart = () => {

    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        const data = await fetch("https://api.github.com/users/mustaq-ahmed");
        const json = await data.json();
        // console.log(json);
        setUserInfo(json)
    }
    console.log(userInfo);

    return (
        <>
            <h1>InstaMart Component</h1>
            <h2>Name: {userInfo?.name}</h2>
            <h2>Type: {userInfo?.type}</h2>
            <h2>URL: {userInfo?.url}</h2>
        </>
    )
}

export default InstaMart;