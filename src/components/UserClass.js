import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            userInfo: {
                name: "",
                location: "",
                avatar_url: " "
            }
        }
    }

    async componentDidMount(){
        let data = await fetch('https://api.github.com/users/NitantKumar');
        let json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        })
    }

    componentWillUnmount(){
        console.log("Unmounted");
    }
    render(){

        const {name, location, avatar_url} = this.state.userInfo;

        return(
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>{name}</h2>
                <h2>{location}</h2>
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="m-4 bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
                <h2>Contact Information</h2>
            </div>
        );
    };
}

export default UserClass;