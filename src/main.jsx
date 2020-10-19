import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
class Main extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Link to="/about" >go to about </Link>
                hello main
            </div>
         );
    }
}
 
export default Main;