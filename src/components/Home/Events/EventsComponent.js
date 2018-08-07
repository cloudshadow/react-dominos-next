import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './events.scss';

export default class EventsComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="container-fluid events-container">
        <div className="row">
          {this.props.eventImages.map(item =>
            <div className="col-sm-3 col-12 event" key={item.id}>
              <Link to={item.link}>
                <img src={item.url} />
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

EventsComponent.propTypes = {
  eventImages: PropTypes.array.isRequired,
};