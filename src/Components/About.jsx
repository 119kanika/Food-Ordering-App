import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About</h1>
            <User name={"Kanika Mahindroo"}/>
            <UserClass name={"Kanika"}/>
        </div>
    )
}

export default About;