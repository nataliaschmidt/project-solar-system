import React from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planet-card-container">
        <div className="planet-card" data-testid="planet-card">
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
          <p data-testid="planet-name">{ planetName }</p>
        </div>
      </div>
    );
  }
}

PlanetCard.defaultProps = {
  planetName: 'Planeta',
  planetImage: 'Imagem do planeta',
};

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

export default PlanetCard;
