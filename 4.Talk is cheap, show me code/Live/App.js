import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://th.bing.com/th/id/OIP.izEtKRm_9NDLyEZpsSlOmwHaD6?pid=ImgDet&rs=1" alt="App-Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resObj1 = {
    type: "F",
    id: "30531",
    name: "Hotel Empire",
    uuid: "b6535450-6f4c-434f-8cae-425317928346",
    city: "1",
    area: "Brigade Road",
    totalRatingsString: "10000+ ratings",
    cloudinaryImageId: "qltgnkyywuo5gmnpqzbm",
    cuisines: [
        "North Indian",
        "Kebabs",
        "Biryani"
    ],
    tags: [],
    costForTwo: 45000,
    costForTwoString: "₹450 FOR TWO",
    deliveryTime: 24,
    minDeliveryTime: 24,
    maxDeliveryTime: 24,
    slaString: "24 MINS",
    lastMileTravel: 2.0999999046325684,
    slugs: {
        restaurant: "empire-restaurant-central-bangalore-central-bangalore",
        city: "bangalore"
    }
};

const resObj2 = {
    type: "F",
    id: "113657",
    name: "Halli Donne Biryani",
    uuid: "4a9d89ef-054d-447a-9b5d-506673592786",
    city: "1",
    area: "Koramangala",
    totalRatingsString: "1000+ ratings",
    cloudinaryImageId: "gsc5bv2hehh1mzqxvwb7",
    cuisines: [
        "South Indian"
    ],
    tags: [],
    costForTwo: 20000,
    costForTwoString: "₹200 FOR TWO",
    deliveryTime: 33,
    minDeliveryTime: 33,
    maxDeliveryTime: 33,
    slaString: "33 MINS",
    lastMileTravel: 6.400000095367432,
    slugs: {
        restaurant: "halli-jonne-biryani-koramangala",
        city: "bangalore"
    }
};

const resObj3 = {
    type: "F",
    id: "3241",
    name: "Meghana Foods",
    uuid: "93695df0-56e1-417e-b9a8-32084ebaadaf",
    city: "1",
    area: "Ashok Nagar",
    totalRatingsString: "10000+ ratings",
    cloudinaryImageId: "e0vvulfbahjxjz6k4uwi",
    cuisines: [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood"
    ],
    tags: [],
    costForTwo: 50000,
    costForTwoString: "₹500 FOR TWO",
    deliveryTime: 19,
    minDeliveryTime: 19,
    maxDeliveryTime: 19,
    slaString: "19 MINS",
    lastMileTravel: 2.4000000953674316,
    slugs: {
        restaurant: "meghana-foods-central-bangalore",
        city: "bangalore"
    }
};

const resList = [
    {
        type: "F",
        id: "30531",
        name: "Hotel Empire",
        uuid: "b6535450-6f4c-434f-8cae-425317928346",
        city: "1",
        area: "Brigade Road",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "qltgnkyywuo5gmnpqzbm",
        cuisines: [
            "North Indian",
            "Kebabs",
            "Biryani"
        ],
        tags: [],
        costForTwo: 45000,
        costForTwoString: "₹450 FOR TWO",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: "24 MINS",
        lastMileTravel: 2.0999999046325684,
        slugs: {
            restaurant: "empire-restaurant-central-bangalore-central-bangalore",
            city: "bangalore"
        }
    },
    {
        type: "F",
        id: "113657",
        name: "Halli Donne Biryani",
        uuid: "4a9d89ef-054d-447a-9b5d-506673592786",
        city: "1",
        area: "Koramangala",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "gsc5bv2hehh1mzqxvwb7",
        cuisines: [
            "South Indian"
        ],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        slaString: "33 MINS",
        lastMileTravel: 6.400000095367432,
        slugs: {
            restaurant: "halli-jonne-biryani-koramangala",
            city: "bangalore"
        }
    },
    {
        type: "F",
        id: "3241",
        name: "Meghana Foods",
        uuid: "93695df0-56e1-417e-b9a8-32084ebaadaf",
        city: "1",
        area: "Ashok Nagar",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "e0vvulfbahjxjz6k4uwi",
        cuisines: [
            "Biryani",
            "Andhra",
            "South Indian",
            "North Indian",
            "Chinese",
            "Seafood"
        ],
        tags: [],
        costForTwo: 50000,
        costForTwoString: "₹500 FOR TWO",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        slaString: "19 MINS",
        lastMileTravel: 2.4000000953674316,
        slugs: {
            restaurant: "meghana-foods-central-bangalore",
            city: "bangalore"
        }
    },
    {
        type: "F",
        id: "237472",
        name: "Edesia by Freshmenu",
        uuid: "97df81a7-9420-4497-b29c-4a56feb790c0",
        city: "1",
        area: "Richmond Town",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "dqnzpwannyqvhx0hylcf",
        cuisines: [
            "Desserts",
            "Bakery",
            "Sweets"
        ],
        tags: [],
        costForTwo: 15000,
        costForTwoString: "₹150 FOR TWO",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        slaString: "23 MINS",
        lastMileTravel: 2.299999952316284,
        slugs: {
            restaurant: "edesia-aga-abdullah-street-central-bangalore",
            city: "bangalore"
        }
    },
    {
        type: "F",
        id: "200767",
        name: "Sharief Bhai",
        uuid: "1e37f2af-7395-434e-a160-6586e2afcfd1",
        city: "1",
        area: "Indiranagar",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "ytc4gutjwgq22kygffhm",
        cuisines: [
            "Mughlai",
            "Biryani",
            "Arabian",
            "Kebabs",
            "Beverages",
            "Desserts"
        ],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 32,
        minDeliveryTime: 32,
        maxDeliveryTime: 32,
        slaString: "32 MINS",
        lastMileTravel: 5.5,
        slugs: {
            restaurant: "sharief-bhai-indiranagar-indiranagar",
            city: "bangalore"
        }
    },
    {
        type: "F",
        id: "672387",
        name: "Cafe Delhi Heights",
        uuid: "50bcf794-ac21-401f-8baa-8f20deff5684",
        city: "1",
        area: "Central Bangalore",
        totalRatingsString: "20+ ratings",
        cloudinaryImageId: "6373143e852214f7a73414dc727cc975",
        cuisines: [
            "Indian",
            "Chinese",
            "Italian"
        ],
        tags: [],
        costForTwo: 80000,
        costForTwoString: "₹800 FOR TWO",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        slaString: "31 MINS",
        lastMileTravel: 2.0999999046325684,
        slugs: {
            restaurant: "cafe-delhi-heights-central-bangalore-central-bangalore",
            city: "bangalore"
        }
    },
    {
        type: "F",
        id: "32911",
        name: "Salt Mango Tree",
        uuid: "74f3f32c-0302-4091-b930-9ac7cdb8a296",
        city: "1",
        area: "Indiranagar",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageId: "dop9h8a7rjuab7j9ddy3",
        cuisines: [
            "Kerala",
            "South Indian",
            "Seafood",
            "Biryani",
            "Indian"
        ],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        slaString: "34 MINS",
        lastMileTravel: 5.599999904632568,
        slugs: {
            restaurant: "salt-mango-tree-indiranagar-indiranagar",
            city: "bangalore"
        }
    },
    {
        type: "F",
        id: "626483",
        name: "Andhra Ruchulu",
        uuid: "e251b36e-26ac-4d1f-b4d7-5c7c062e9c92",
        city: "1",
        area: "Malleshwaram",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "b3db7e8c7690d74188ae0999eae30955",
        cuisines: [
            "Chinese",
            "North Indian",
            "Biryani",
            "Snacks"
        ],
        tags: [],
        costForTwo: 50000,
        costForTwoString: "₹500 FOR TWO",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        slaString: "28 MINS",
        lastMileTravel: 4.199999809265137,
        slugs: {
            restaurant: "andhra-ruchulu-malleshwaram-malleshwaram",
            city: "bangalore"
        }
    }
]

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, totalRatingsString, costForTwo, deliveryTime } = resData;
    console.log(resData);
    return (
        <div className="res-card">
            <img className="res-logo"
                src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resData.cloudinaryImageId}
                alt="Res-Logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{totalRatingsString}</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

// resName, cuisine => props(properties) => we pass props to the component

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map(resData => {
                        return <RestaurantCard key={resData.id} resData={resData} />
                    })
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< AppLayout />);




