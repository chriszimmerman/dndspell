import React from 'react';
import SpellCard from './SpellCard';

class CollapsableSpellCard extends React.Component {
  render() {
    const spellName = this.props.spell.name;
    const spellCollapseElement = `${spellName}collapse`;
    const dataTargetIdForCollapseElement = `#${spellCollapseElement}`;

    return (
      <div className="card">
        <div 
          className="card-header"
          id={spellName}
        >
          <h2 className="mb-0">
            <button 
              className="btn btn-link" 
              data-toggle="collapse" 
              data-target={dataTargetIdForCollapseElement} 
              aria-expanded="false" 
              aria-controls={spellCollapseElement}
            >
              {this.props.spell.name}
            </button>
            <div className="float-right">
              {this.props.button}
            </div>
          </h2>
        </div>

        <div 
          id={spellCollapseElement} 
          className="collapse" 
          aria-labelledby={spellName}
        >
          <SpellCard spell={this.props.spell} />
        </div>
      </div>
    );
  }
}

export default CollapsableSpellCard;
