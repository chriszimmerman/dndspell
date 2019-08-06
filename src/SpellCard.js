import React from 'react';

class SpellCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const spell = this.props.spell;

        return (
        <div className="container jumbotron" data-toggle="collapse">
            {
                this.props.button
            }
            <h2>{spell.name}</h2>
            <h3>{spell.level} spell</h3>
            <p>Components: {spell.components}</p>
            <p>Material: {spell.material}</p>
            <p>Ritual: {spell.ritual}</p>
            <p>Concentration: {spell.concentration}</p>
            <p>Range: {spell.range}</p>
            <p>Casting Time: {spell.casting_time}</p>
            <p>Duration: {spell.duration}</p>
            <p>School: {spell.school}</p>
            <p>Classes: {spell.class}</p>
            <p>{spell.desc}</p>
            {
                spell.higher_level
                    ? <div><h2>At higher levels</h2><p>{spell.higher_level}</p></div>
                    : null
            }
        </div>
        );
    }
}

export default SpellCard;
