import React from 'react';
/* Add any imports you think you might need here! */

const Menu = () => { 

    return (
      <div className="colorOptions">
          {<div className="colorOptions">
            <Color color="red" handleClick={this.props.handleClick}></Color>
            <Color color="blue" handleClick={this.props.handleClick}></Color>
            <Color color="purple" handleClick={this.props.handleClick}></Color>
            <Color color="green" handleClick={this.props.handleClick}></Color>
        </div>
      }
      </div>
    );
}

export default Menu;