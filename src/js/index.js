// src/js/index.js
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/App.css";

//import your own components
import Home from "./component/Home";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home />);
