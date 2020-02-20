import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar           from "./components/mainNavBar/mainnavbar.component";
import CreateUser       from "./components/mainNavBar/create-user.component";
import EventsList    from "./components/mainNavBar/events-list.component";
import CreateCompany from "./components/mainNavBar/create-company.component";


function App() {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <br />
                <Route path="/" exact component={EventsList} />
                <Route path="/createUser" component={CreateUser} />
                <Route path="/createCompany" component={CreateCompany} />
            </div>
        </Router>
  );
}

export default App;
