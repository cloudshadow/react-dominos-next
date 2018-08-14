import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import './slick.scss';
import './slick-theme.scss';
import './carousel.scss';

export default class CarouselComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.settings = {
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      infinite: true,
      // speed: 2500,
      slidesToShow: this.props.number,
      slidesToScroll: this.props.number,
      touchMove: false,
    };
  }

  render() {
    return (
      <Slider {...this.settings}>
        {this.props.suggestionItems.map(
          item =>
            <div className="slider-mutil-item" key={item.id}>
              <img className="slider-image" src={item.image} alter={item.image} />
              <button className="slider-btn">Add to Cart</button>
            </div>
        )}
      </Slider>
    );
  }
}

CarouselComponent.propTypes = {
  suggestionItems: PropTypes.array.isRequired,
  number: PropTypes.number.isRequired,
};