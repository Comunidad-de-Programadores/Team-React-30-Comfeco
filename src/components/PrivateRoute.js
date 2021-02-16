/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/auth';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn()) {
          return <Component {...props} />;
        }
        return (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        );
      }}
    />
  );
}
