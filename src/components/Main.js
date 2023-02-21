import React from "react";

import Cities from "./Cities";
import Local_weather from "./Local_weather";

import "../styles/Main.css";


function Main () {

    return (
        <>
            <div className="local">
                 <Local_weather />
            </div>
            <div className="local">
                <Cities />
            </div>
        </>   
    )
}

export default Main;