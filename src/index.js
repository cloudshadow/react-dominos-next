import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import createHistory from 'history/createBrowserHistory';
import history from './utils/history';
// import MonitorHelper from './utils/monitor';
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
import CartPage from './containers/CartPage'; // eslint-disable-line import/no-named-as-default
import OrderPage from './containers/OrderPage'; // eslint-disable-line import/no-named-as-default
import MemberPage from './containers/MemberPage'; // eslint-disable-line import/no-named-as-default
import Footer from './components/Footer/FooterComponent';
import NotfoundPage from './containers/NotfoundPage'; // eslint-disable-line import/no-named-as-default

const store = configureStore();
// const history = createHistory();
// window.onerror = function (errorMessage, scriptURI, lineNo, columnNo, error) {
//   console.log('errorMessage: ' + errorMessage); // 异常信息
//   console.log('scriptURI: ' + scriptURI); // 异常文件路径
//   console.log('lineNo: ' + lineNo); // 异常行号
//   console.log('columnNo: ' + columnNo); // 异常列号
//   console.log('error: ' + error); // 异常堆栈信息
// };

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
            <Route path="/cart" component={CartPage} />
            <Route path="/order" component={OrderPage} />
            <Route path="/member" component={MemberPage} />
            <Route component={NotfoundPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('app')
);
