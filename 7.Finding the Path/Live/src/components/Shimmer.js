
const Shimmer = () => {

    return (
        <div className="res-container">
            {Array(14).fill("").map((a, i) => <div className="shimmer-card" key={i}></div>)}
        </div>
    )
}

export default Shimmer;