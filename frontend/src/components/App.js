import React, { Component } from "react";
import { render } from "react-dom";

const App = () => {
    return(<h1> Hello World </h1>
    );

}




export default App;

const container = document.getElementById("app");
render(<App />, container);