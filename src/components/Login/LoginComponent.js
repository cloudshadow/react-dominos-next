import React from 'react';
import PropTypes from 'prop-types';
import './login.scss';

export default class LoginComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      email: '',
      password: '',
      repeatPassword: '',
      model: 'login'
    };
  }

  componentDidMount() {
    console.log(this.props.userState.previousPath)
  }

  handleTabClick(model) {
    this.setState({ model });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleLoginClick() {
    this.state.model === 'login' ? this.props.login(this.state.email, this.state.password, this.props.userState.previousPath) : this.props.signup(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="container-fluid login-container">
        <div className="row">
          <div className="col-12 col-sm-4 offset-sm-4 login-wrapper">
            <ul className="nav nav-tabs">
              <li className="nav-item login-tab" onClick={this.handleTabClick.bind(this, 'login')}>
                <span className={this.state.model === 'login' ? 'nav-link active' : 'nav-link'}>Log In</span>
              </li>
              <li className="nav-item register-tab" onClick={this.handleTabClick.bind(this, 'signup')}>
                <span className={this.state.model === 'signup' ? 'nav-link active' : 'nav-link'}>Sign Up</span>
              </li>
            </ul>
            <div className="form-group form-wrapper">
              <div className="form-group">
                <label >Email address</label>
                <input type="email" id="email" className="form-control" placeholder="email@example.com" onChange={this.handleChange.bind(this)} />
              </div>
              <div className="form-group">
                <label >Password</label>
                <input type="password" id="password" className="form-control" placeholder="Password" onChange={this.handleChange.bind(this)} />
              </div>
              <div className={this.state.model === 'login' ? 'form-group hide' : 'form-group'}>
                <label >Repeat Password</label>
                <input type="password" id="repeatPassword" className="form-control" placeholder="Repeat Password" onChange={this.handleChange.bind(this)} />
              </div>
              <div className="form-group btn-wrapper">
                <button className="btn btn-lg btn-block" onClick={this.handleLoginClick.bind(this)}>{this.state.model === 'login' ? 'Log In' : 'Sign Up'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  login: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  userState: PropTypes.object.isRequired,
};