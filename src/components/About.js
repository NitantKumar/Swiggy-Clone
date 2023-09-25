import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about">
        <h1>About Us</h1>
        <h2>React Learning Grounds!!!</h2>
        <User name={"Nitant(function)"} />
        <UserClass/>
      </div>
    );
  }
}

export default About;
