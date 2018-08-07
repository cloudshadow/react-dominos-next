import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch } from 'react-router-dom';
import HomeComponent from './Home/HomeComponent';
import CouponComponent from './Coupon/CouponComponent';
import OrderComponent from './Order/OrderComponent';
import './member.scss';

export default class MemberComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  activeMenu(pathname) {
    return window.location.pathname.includes(pathname) ? 'menu active' : 'menu';
  }

  renderUser() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="avatar">
            <img src="http://static-test.dominos.com.cn/000/avatar1.jpg" />
          </div>
          <div className="name">
            {this.props.userState.user.name}
          </div>
          <div className="member">
            VIP Member
          </div>
          <div className="expired">
            Expired at 2019-08-01
          </div>
          <div className="member-menu">
            <Link to="/member/home"><span className={this.activeMenu('/member/home')}>Member</span></Link>
          </div>
          <div className="member-menu">
            <Link to="/member/orders"><span className={this.activeMenu('/member/orders')}>Orders</span></Link>
          </div>
          <div className="member-menu">
            <Link to="/member/coupons"><span className={this.activeMenu('/member/coupons')}>Coupons</span></Link>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container member-container">
        <div className="row">
          <div className="col-sm-3 user-wrapper">
            {this.props.userState.user ? this.renderUser() : ''}
          </div>
          <Switch>
            <Route path="/member/home" render={() =>
              <HomeComponent />
            }
            />
            <Route path="/member/coupons" render={() =>
              <CouponComponent />
            }
            />
            <Route path="/member/orders" render={() =>
              <OrderComponent />
            }
            />
          </Switch>
        </div>
      </div>
    );
  }
}

MemberComponent.propTypes = {
  userState: PropTypes.object,
};