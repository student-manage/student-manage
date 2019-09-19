import React from "react";
import { Router } from "dva/router";
import RouterView from "./router/RouterView";
import route from "./router/route";

function App({ history }) {
  return (
    <Router history={history}>
      <RouterView route={route}></RouterView>
    </Router>
  );
}
export default App;
