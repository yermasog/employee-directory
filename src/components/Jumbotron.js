import React from "react";

function Jumbotron(props) {
    console.log(props);
  return <div className={props.jumbotron}>{props.children}</div>
}

export default Jumbotron;
