import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
            // console.log("false");
        });
        window.addEventListener("online", () => {
            setOnlineStatus(true);
            // console.log("true");
        });
    },[]);

    return onlineStatus;
}

export default useOnlineStatus;