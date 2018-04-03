import React from 'react';
// import PropTypes from 'prop-types';
import './footer.scss';

export default class FooterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="container-fluid footer-container">
        <div className="row">
          <div className="col-sm-12">
            关于达美乐 联系我们 企业证照 加入我们 隐私条款 使用条款 法律条款
          </div>
          <div className="col-sm-12">
            2016 © Domino's Pizza China 版权所有 沪ICP备12007878号-4沪公网安备 31010102003261号
          </div>
        </div>
      </div>
    );
  }
}

FooterComponent.propTypes = {
};