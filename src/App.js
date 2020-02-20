import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar           from "./components/mainNavBar/mainnavbar.component";
import CreateUser       from "./components/mainNavBar/create-user.component";
import EventsList    from "./components/mainNavBar/events-list.component";
import CreateCompany from "./components/mainNavBar/create-company.component";
import Login from "./components/login.component";


function App() {
    return (
        <Router>
            <div className="container">
                {/* <Navbar /> */}
                <br />
                <Switch>
                <Route path="/" exact component={EventsList} />
                <Route path="/login" exact component={Login} />
                <Route path="/createUser" component={CreateUser} />
                <Route path="/createCompany" component={CreateCompany} />
                <Route path="*" component={() => "404 NOT FOUND"}/>
                </Switch>
            </div>
        </Router>
  );
}

export default App;
