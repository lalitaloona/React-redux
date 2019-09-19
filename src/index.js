import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom'
import { Provider } from 'react-redux'

import Main from './components/main'
import Detail from './components/detail'
import store from './redux/store'

const App = (props) => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/list"
                    component={Main}
                />
                <Route
                    exact
                    path="/list/:id"
                    component={Detail}
                />
                <Redirect
                    from="/"
                    to="/list"
                />
            </Switch>
        </BrowserRouter>
    </Provider>
)

render(
    <App store={store} />, 
    document.querySelector('.root')
);
