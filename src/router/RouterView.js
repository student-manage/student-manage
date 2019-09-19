import React, { Component } from "react";
import { Route, Switch, Redirect } from "dva/router";

class RouterView extends Component {
  render() {
    const { route } = this.props;
    return (
      <Switch>
        {route.map(item =>
          item.path ? (
            <Route
              key={item.path}
              path={item.path}
              render={props =>(
                  <item.component {...props} route={item.children} />
              )}/>
          ) : (
            <Redirect key={item.from} {...item} />
          )
        )}
      </Switch>
    );
  }
}

export default RouterView;
