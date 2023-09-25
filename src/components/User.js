import { useEffect, useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("use effect");
        }, 1000);
        return () => {
            clearInterval(timer);
            console.log("use effect return");
        }
    }, [])
    return(
        <div className="user-card">
            <h2 onClick={() =>{
                setCount(count + 1);
            }}>Count: {count}</h2>
            <h2>Name: {props.name}</h2>
            <h2>Location</h2>
            <h2>Contact Information</h2>
        </div>
    );
};

export default User;