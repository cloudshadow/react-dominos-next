import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './slick.scss';
import './slick-theme.scss';
import './carousel.scss';

export default class CarouselSingleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3500,
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchMove: false,
    };
  }

  // handleClick(link) {
  //   console.log('1111');
  //   push(link);
  // }
  //onClick={() => this.handleClick(item.link)}
  // e.preventDefault()

  render() {
    return (
      <Slider {...this.settings}>
        {this.props.sliderImages.map(
          item => <div className="slider-item" key={item.id}><Link to={item.link} ><img className="slider-image" src={item.url} /></Link></div>
        )}
      </Slider>
    );
  }
}

CarouselSingleComponent.propTypes = {
  sliderImages: PropTypes.array.isRequired,
};