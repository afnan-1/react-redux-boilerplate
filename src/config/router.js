import React from "react";
import Main from '../main.jsx'
import About from '../about.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class AppRouter extends React.Component {
    state = {  }
    render() { 
        return (
            <Router>
                <Route exact path='/' component={Main} />
                <Route path='/about' component={About} />
                </Router>
          );
    }
}
 
export default AppRouter;