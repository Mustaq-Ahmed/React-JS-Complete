//?  Nested Header Element using a React.createElement ('h1', 'h2', 'h3' inside "div" with class "title")
/*
const header = React.createElement(
    "div", { id: "title" },
    [
        React.createElement("h1", { key: "1" }, "h1 Tag"),
        React.createElement("h2", { key: "2" }, "h2 Tag"),
        React.createElement("h3", { key: "3" }, "h3 Tag")
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);
*/

//?  Same Element using JSX
/*
const header = <div>
    <h1>h1 Tag</h1>
    <h2>h2 Tag</h2>
    <h3>h3 Tag</h3>
</div>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);
*/

//?  Functional component for the same above result
/*
const Header = () => {
    return (
        <div>
            <h1>h1 Tag</h1>
            <h2>h2 Tag</h2>
            <h3>h3 Tag</h3>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
*/

//?  Pass Attribute into the JSX tag
// const title = <h1 id="title" className="headerTitle" tabIndex="2"> h1 tag using JSX</h1>

//? Composition of Components (Add a Component Inside other)
/*
const Title = () => {
    return (
        <h1> Header Title </h1>
    )
}

const Header = () => {
    return (
        <div>
        <Title />
            <h1>h1 Tag</h1>
            <h2>h2 Tag</h2>
            <h3>h3 Tag</h3>
        </div>
    )
}
*/