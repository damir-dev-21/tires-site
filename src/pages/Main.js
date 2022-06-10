import React from "react";
import Header from "../components/header.component";

function Main(props){
    return(
        <div>
            {props.children}
        </div>
    )
}

export default Main