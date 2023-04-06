//? Create a Header Component from scratch using JSX
//? A) Add a Logo on Left
//? B) Add a Search Bar in Middle
//? C) Add a User Icon on Right
//? D) Add CSS to make it look nice

const Header = () => {
    return (
        <div id="container">
            <h1>LOGO</h1>
            <div id="search">
                <input type="search" name="" id="" placeholder="search" />
            </div>
            <h1>USER ICON</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);


//? In index.css file
/*
#heading{
    color: red;
}

*{
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
}

#container{
    height: 5rem;
    background-color: beige;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

#search input{
    height: 30px;
    width: 250px;
}
*/