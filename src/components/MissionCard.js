import React from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';
import { FaCalendar, FaGlobe, FaFlag } from 'react-icons/fa';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-card" data-testid="mission-card">
        <p data-testid="mission-name">{ name.toUpperCase() }</p>
        <div className="card-infos">
          <p data-testid="mission-year">
            {' '}
            <FaCalendar size={ 20 } />
            {' '}
            { year }
          </p>
          <p data-testid="mission-country">
            {' '}
            <FaGlobe size={ 20 } />
            {' '}
            { country }
          </p>
          <p data-testid="mission-destination">
            {' '}
            <FaFlag size={ 20 } />
            {' '}
            { destination }
          </p>
        </div>
      </div>
    );
  }
}

MissionCard.defaultProps = {
  name: '-',
  year: '-',
  country: '-',
  destination: '-',
};

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

export default MissionCard;
