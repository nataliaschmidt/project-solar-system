import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
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
