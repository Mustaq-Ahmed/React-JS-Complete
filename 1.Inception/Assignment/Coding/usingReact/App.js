// Hello World Using React

// let parent = React.createElement("h1", {}, "Hello World from React");
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


// Creating a Nested React Elements

// let parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         React.createElement("h1", {}, "I am a h1 Tag"))
// );
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


// Creating Siblings React Elements

let parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am a h1 Tag"), React.createElement("h2", {}, "I am a h2 Tag")])
);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
