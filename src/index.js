import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import createHistory from 'history/createBrowserHistory';
import history from './utils/history';
import { Route, Switch } from 'react-router';
import configureStore from './store/configureStore';
// require('./favicon.ico');
import './index.scss';
import { ConnectedRouter } from 'react-router-redux';
import Navbar from './containers/NavbarPage'; // eslint-disable-line import/no-named-as-default
import LoginPage from './containers/LoginPage'; // eslint-disable-line import/no-named-as-default
import HomePage from './containers/HomePage'; // eslint-disable-line import/no-named-as-default
import MenuPage from './containers/MenuPage'; // eslint-disable-line import/no-named-as-default
import PromotionPage from './containers/PromotionPage'; // eslint-disable-line import/no-named-as-default
import Footer from './components/Footer/FooterComponent';
import NotfoundPage from './containers/NotfoundPage'; // eslint-disable-line import/no-named-as-default

const store = configureStore();
// const history = createHistory();

render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <div className="index-container">
        <Navbar />
        <div className="switch-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/menu" component={MenuPage} />
            <Route path="/promotion" component={PromotionPage} />
            <Route component={NotfoundPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('app')
);
