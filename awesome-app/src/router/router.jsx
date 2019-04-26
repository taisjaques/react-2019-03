import React from "react";
import { Switch, Router, Redirect } from "react-router";
import * as Modules from "../modules";

import history from "./history";
import AppRoute from "./app-route";
import { LayoutContext } from "../contexts";

class MainRouter extends React.Component {
  render() {
    return (
      <LayoutContext.Consumer>
          {({ layout }) => (
        <React.Suspense fallback={<span>Carregando...</span>}>
          <Router history={history}>
            <Switch>
              <AppRoute
                layout={layout}
                exact
                path="/"
                component={Modules.HomePage}
              />
              <AppRoute
                layout={layout}
                path="/contador"
                component={Modules.CounterPage}
              />
              <AppRoute
                layout={layout}
                path="/jogo-da-velha"
                component={Modules.TicTacToePage}
              />
              <AppRoute
                layout={layout}
                path="/fotos"
                component={Modules.PhotosPage}
              />
              <AppRoute
                layout={layout}
                path="/fala"
                component={Modules.SpeechPage}
              />
              <Redirect to="/" />
            </Switch>
          </Router>
        </React.Suspense>
        )}
      </LayoutContext.Consumer>
    );
  }
}

export default MainRouter;
