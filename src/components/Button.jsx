import React, { Component } from 'react';
class Button extends Component {
    render() { 
        return <div>
         <button className='submitButtons' onClick={this.props.onClick}>
            Click here!
        </button>;
        </div>
    }
}
 
export default Button;