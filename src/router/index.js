import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "../layout/index";
import routes from "./routes";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <AppLayout>
          {routes.map((route) => (
            <Route
              exact={route.path === "/"}
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </AppLayout>
      </Switch>
    </Router>
  );
};

export default AppRouter;
