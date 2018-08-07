import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../Shared/Carousel/CarouselSingleComponent';
import Events from './Events/EventsComponent';
import './home.scss';

export default class HomeComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.getHomeInfo();
  }

  renderPage() {
    return (
      <div>
        <Carousel sliderImages={this.props.homeState.homeInfo.sliderImages} />
        <Events eventImages={this.props.homeState.homeInfo.eventImages} />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.homeState.homeInfo ? this.renderPage() : ''}
      </div>
    );
  }
}

HomeComponent.propTypes = {
  getHomeInfo: PropTypes.func.isRequired,
  homeState: PropTypes.object.isRequired,
};