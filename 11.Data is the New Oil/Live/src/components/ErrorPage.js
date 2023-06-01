import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    const { status, statusText, data } = error;

    return (
        <>
            <h1>OOPS!!</h1>
            <h2>Something Went Wrong.....!</h2>
            <h2>{status + " : " + statusText}</h2>
            <h2>{data}</h2>
        </>
    )
}

export default ErrorPage;