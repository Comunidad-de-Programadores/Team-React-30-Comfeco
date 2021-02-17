import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../views/Layout/Dashboard';
import { Auth } from '../views/Auth/Auth';

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/auth" />
        </Route>
        <Route path="/auth" component={Auth} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
