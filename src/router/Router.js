import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../views/Layout/Dashboard';
import { Auth } from '../views/Auth/Auth';
import { PasswordReset } from '../views/PasswordReset/PasswordReset';

const Router = () => (
  <BrowserRouter>
    <Route exact path="/">
      <Redirect to="/auth" />
    </Route>
    <Layout>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/password-reset" component={PasswordReset} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
