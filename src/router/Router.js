import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../views/Layout/Dashboard';
import { Auth } from '../views/Auth/Auth';
import PasswordRecovery from '../views/Auth/PasswordRecovery/PasswordRecovery';
import PasswordReset from '../views/Auth/PasswordReset/PasswordReset';
import { Home } from '../views/Home/Home';
import PrivateRoute from './PrivateRoute';

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/auth" />
        </Route>
        <Route path="/auth" component={Auth} />
        <Route path="/password-reset">
          <Switch>
            <Route exact path="/password-reset" component={PasswordRecovery} />
            <Route path="/password-reset/reset" component={PasswordReset} />
          </Switch>
        </Route>
        <PrivateRoute exact path="/home" component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
