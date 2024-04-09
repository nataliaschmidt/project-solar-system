import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    // console.log(planets);
    return (
      <div className="solar-system" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="line" />
        <ul className="container-planet">
          {
            planets
              .map((planet) => (<PlanetCard
                key={ planet.name }
                planetImage={ planet.image }
                planetName={ planet.name }
              />))
          }
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
