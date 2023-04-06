import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 id="heading" tabIndex="1">Namaste React using JSX</h1>
console.log(jsxHeading);

const title = (
    <h1>This is from title variable</h1>
)

const Title = () => <h1>Title Component</h1>;

const HeadingComponent = () => {
    return (
        // <div id="container">
        // <>
        <React.Fragment>
            <Title />
            <Title></Title>
            {Title()}
            {title}
            <h2>{10 + 20}</h2>
            <h1 id="heading">Namaste React From Functional Component</h1>
        </React.Fragment>
        // </>
        // </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< HeadingComponent />);


// const Header = () => {
//     return (
//         <div id="container">
//             <h1>LOGO</h1>
//             <div id="search">
//                 <input type="search" name="" id="" placeholder="search" />
//             </div>
//             <h1>USER ICON</h1>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Header />);



