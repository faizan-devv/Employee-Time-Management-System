import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import DashboardPage from './pages/DashboardPage';
import SignUp from './components/SignUp';
import Auth from './Auth';
import DetailPage from './pages/DetailPage';
const Router = (props) => (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/SignUp' component={SignUp} />
        <PrivateRoute path="/Dashboard" component={DashboardPage}/>
        <PrivateRoute
            exact
            path="/user-logs/:id"
            component={DetailPage}
          ></PrivateRoute>
    </Switch>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            Auth.getAuth() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/"
                    }}
                />
            )
        }
    />
);

export default Router;