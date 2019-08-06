import React from 'react';
import SpellCard from './SpellCard';

class CollapsableSpellCard extends React.Component {
    render() {
        const spellName = this.props.spell.name;
        const spellCollapseElement = `${spellName}collapse`;

        return (
            <div>
                <div className="card">
                    <div className="card-header" id={spellName}>
                        <h2 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#${spellCollapseElement}`} aria-expanded="false" aria-controls={spellCollapseElement}>
                               {this.props.spell.name} 
                            </button>
                        </h2>
                    </div>

                    <div id={spellCollapseElement} className="collapse" aria-labelledby={spellName}>
                        <SpellCard spell={this.props.spell} button={this.props.button}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CollapsableSpellCard;
