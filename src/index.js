import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router';
// import { routes } from './routes';
import configureStore from './store/configureStore';
// require('./favicon.ico');
import './index.scss';
import { ConnectedRouter } from 'react-router-redux';
// import App from './containers/App'; // eslint-disable-line import/no-named-as-default
import Navbar from './components/Navbar/NavbarComponent';
import HomePage from './containers/HomePage'; // eslint-disable-line import/no-named-as-default

const store = configureStore();
const history = createHistory();

render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <div className="index-container">
        <Navbar />
        <div className="switch-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('app')
);
