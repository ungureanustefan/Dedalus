import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() { 
        return <div>
            <ul className='navbar'>
                <li><Link to='/'>Homepage</Link></li>
                <li><Link to='/Macro'>Macros</Link></li>
                <li><Link to='/Goal'>Fitness Goal</Link></li>
                <li><Link to='/BMI'>BMI</Link></li>
                
            </ul>
        </div>;
    }
}
 
export default Navbar;