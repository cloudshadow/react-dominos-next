import React from 'react';
import PropTypes from 'prop-types';
import CarouselMultipleComponent from '../Shared/Carousel/CarouselMultipleComponent';
import './cart.scss';

export default class CartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.getCart();
    this.props.getSuggestionItems();
  }

  renderPage() {
    return (
      <div className="container-fluid cart-container">
        <div className="row">
          <div className="col-sm-12">
            {console.log(this.props.cartState.items)}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="suggestion-title">
              Suggestion
            </div>
          </div>
        </div>
        <CarouselMultipleComponent
          suggestionItems={this.props.cartState.suggestionItems}
          number={4}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.cartState.suggestionItems ? this.renderPage() : ''}
      </div>
    );
  }
}

CartComponent.propTypes = {
  getCart: PropTypes.func.isRequired,
  getSuggestionItems: PropTypes.func.isRequired,
  cartState: PropTypes.object.isRequired,
};