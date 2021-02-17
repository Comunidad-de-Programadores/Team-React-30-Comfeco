import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../views/Layout/Dashboard';
import { Auth } from '../views/Auth/Auth';
import PasswordRecovery from '../views/Auth/PasswordRecovery';
import PasswordReset from '../views/Auth/PasswordReset';

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
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
