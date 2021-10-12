import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from 'pages/login';

interface Props {
  component: any;
  exact?: boolean;
  path: string;
}

const LoginDoneRoute = React.memo(({ component: Component, ...params }: Props) => (
  <Route {...params} render={(props) => <Component {...props} />} />
));

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />

        <LoginDoneRoute exact path="/marketplace/dashboard/:type" component={Login} />
      </Switch>
    </Router>
  );
};

export default Routes;
