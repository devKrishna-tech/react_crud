import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Add from './components/Addusers/Add';
import Users from './components/AllUsers/Users';
import EditUser from './components/Edituser/Edit';
// import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Users />
                </Route>
                <Route exact path="/add">
                    <Add />
                </Route>
                <Route exact path="/edit/:id">
                    <EditUser />
                </Route>
            </Switch>
            {/* <Footer /> */}
        </Router>
    )
}

export default App
