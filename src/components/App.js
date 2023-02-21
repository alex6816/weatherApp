import React from "react";

import Main from "./Main";
import Header from "./Header";

import "../styles/App.css";

function App () {
    
    return (
        <>
            <div className="main-box">
                <Header />
                <Main />
            </div>   
        </>
    )
}


export default App;