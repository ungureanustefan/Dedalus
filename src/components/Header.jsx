import React, { Component } from 'react';
class Header extends Component {
    render() { 
        return <div className='header'>
            <h1 className='greeting'>Welcome!</h1>
            <h2 className='information'>This app provides you with a BMI calculator and a Macros calculator so you can get a
            clearer picture of where you are now and what to do in order to achieve your fitness goal.</h2>
        </div>
    }
}
 
export default Header;