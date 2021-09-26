import React, { Component } from 'react';
import BMICard from './BMICard';
import MacroCard from './MacroCard';
class Homepage extends Component {
    render() { 
        return <div className='homepage'>
            <BMICard />
            <MacroCard />
        </div>;
    }
}
 
export default Homepage;