import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/auth/signup" component={SignUp} />
            <Route exact path="/auth/signin" component={SignIn} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
