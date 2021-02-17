import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../views/Layout/Dashboard';
import { Auth } from '../views/Auth/Auth';
import PasswordRecovery from '../views/Auth/PasswordRecovery';

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/auth" />
        </Route>
        <Route path="/auth" component={Auth} />
        <Route path="/password-reset" component={PasswordRecovery} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
