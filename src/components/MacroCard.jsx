import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MacroCard extends Component {
    render() { 
        return <div className='cards'>
        <Link to='/Macro' className='card2'>
            <div className='inner'>
            <h2 className='title'>Check your Macros now!</h2>
            <p className='cardText'>A macros calculator is an easy equation to work out how many macronutrients
                 (protein, carbohydrates and fats) your body needs each day based on your weight and daily activity levels.</p>
            <button className='button'>Click here!</button>
            </div>
        </Link>
    </div>;
    }
}


export default MacroCard;