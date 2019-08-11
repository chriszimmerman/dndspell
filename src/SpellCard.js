import React from 'react';

class SpellCard extends React.Component {
  render() {
    const spell = this.props.spell;

    return (
      <div className="jumbotron">
        {
          this.props.button
        }
        <h2 data-test-id="name">{spell.name}</h2>
        <h3 data-test-id="level">{spell.level} spell</h3>
        <p data-test-id="components">Components: {spell.components}</p>
        <p data-test-id="material">Material: {spell.material}</p>
        <p data-test-id="ritual">Ritual: {spell.ritual}</p>
        <p data-test-id="concentration">Concentration: {spell.concentration}</p>
        <p data-test-id="range">Range: {spell.range}</p>
        <p data-test-id="castingTime">Casting Time: {spell.casting_time}</p>
        <p data-test-id="duration">Duration: {spell.duration}</p>
        <p data-test-id="school">School: {spell.school}</p>
        <p data-test-id="class">Classes: {spell.class}</p>
        <p data-test-id="description">{spell.desc}</p>
        {
          spell.higher_level
            ? <div>
                <h2 data-test-id="atHigherLevels">At higher levels</h2>
                <p data-test-id="atHigherLevelsDescription">{spell.higher_level}</p>
              </div>
            : null
        }
      </div>
    );
  }
}

export default SpellCard;
