import React, { Component } from 'react';
import RouterView from "../../router/RouterView";

class User extends Component {
    state = {}
    render() {
        return (
            <RouterView route={this.props.route}></RouterView>
        );
    }
}

export default (User);