
const Shimmer = () => {

    // console.log("SHIMMER");

    return (
        <div className="res-container flex flex-wrap">
            {Array(14).fill("").map((a, i) => <div className="h-56 w-56 m-2 p-2 border border-black-900 bg-gray-300" key={i}></div>)}
        </div>
    )
}

export default Shimmer;