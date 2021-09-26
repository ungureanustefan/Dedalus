import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class BMICard extends Component {
    render() { 
        return <div className='cards'>
        <Link to='/BMI' className='card'>
            <div className='inner'>
            <h2 className='title'>Check your BMI now!</h2>
            <p className='cardText'>BMI is a reliable indicator of body fatness for most people. It is used to screen for weight categories that may lead to health problems. 
            This calculator provides BMI and the corresponding weight category</p>
            <button className='button'>Click here!</button>
            </div>
        </Link>
    </div>;
    }
}


export default BMICard;