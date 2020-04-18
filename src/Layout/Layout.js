import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

// Components header
import classes from './Layout.module.css';
import Aux from '../hoc/Aux';
import NavBar from '../Components/NavBar/NavBar';

// Routes header
import Login from '../containers/Login/Login';
import Signup from '../containers/Signup/Signup';
import Home from '../containers/Home/Home';
import NotFound from '../Components/NotFound/NotFound';


class Layout extends Component {

    render () {
        return (
            <Aux>
                <NavBar className={classes.NavContainer} />
                <div className={classes.Layout}>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/not-found" component={NotFound} />
                        <Route path="/" exact component={Home} />
                        <Redirect to="/not-found" />
                        <Home />
                    </Switch>
                </div>

            </Aux>
        )
    }
}

export default Layout;