import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Mission extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map(({ name, year, country, destination }) => (
          <MissionCard
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
            key={ name }

          />
        ))}
      </div>
    );
  }
}
export default Mission;
