import React from "react";

class ProfileClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            userInfo: {
                name: "Dummy Name",
                url: "http://",
                type: "User"
            }
        }
        console.log("CHILD - constructor");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/mustaq-ahmed");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        })
        console.log("CHILD - componentDidMount");
    }

    // componentDidMount() {
    //     this.timer = setInterval(() => {
    //         console.log("React OP");
    //     }, 1000)
    // }

    componentDidUpdate() {
        console.log("Component did Update");
    }

    componentWillUnmount() {
        // clearInterval(this.timer);
        console.log("Component Will Unmount");
    }

    render() {
        console.log("CHILD - render");
        const { name, url, type } = this.state.userInfo;
        return (
            <div>
                <h2>Profile Class Based Component</h2>
                <h1>props NAME: {this.props.name}</h1>
                <h2>Name: {name}</h2>
                <h2>Type: {type}</h2>
                <h2>URL: {url}</h2>
            </div>
        )
    }
}

export default ProfileClass;