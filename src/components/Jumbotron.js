import React from "react";
import "../styles/Header.css"

function Jumbotron(props) {
    console.log(props);
  return <div className={props.jumbo}>{props.children}</div>
}

export default Jumbotron;
