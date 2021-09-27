import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Homepage from './Homepage';
import Macro from './Macro';
import BMI from './BMI';
import {Switch, Route, Link} from 'react-router-dom';
import Button from './Button';
import Goal from './Goal';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bmi : '',
            calories : ''
        }

    }

    //Calculate BMI


    //Set states weight and height and assign them the input from BMI.jsx 
    weightChanged = (weightValue) => {
        this.setState({weight: weightValue});
    }

    heightChanged = (heightValue) => {
        this.setState({height: heightValue});
    }



    // Return the correct status based on the value of bmi state
    getBmi = (bmi) => {
        if(bmi < 18.5) {
            return 'Underweight';
        }
        if(bmi >= 18.5 && bmi < 24.9) {
            return 'Normal weight';
        }
        if(bmi >= 25 && bmi < 29.9) {
            return 'Overweight';
        }
        if(bmi >= 30) {
            return 'Obesity';
        }
    }

    computeBmi = () => {
        //bmi calculator
        let bmiValue = ( this.state.weight / this.state.height / this.state.height) * 10000;

        //setting the bmi state

        if (this.state.weight === '' || this.state.height === '') {
            alert('Not a number')
        }
        else if (isNaN(bmiValue) || this.state.height == 0) {
            this.setState({bmi: 'Not a number'})
        }
        
        else {

        this.setState({ bmi : bmiValue });
        }


        //assigning the correct class to the correct weight category
        let bmiClass = this.getBmi(bmiValue);
        
        //setting the bmi class state
        this.setState({ bmiClass : bmiClass });
    }


    //Calculate Macronutrients


    //Set states of proteins, carbs and fats and assign them the input from Macro.jsx
    proteinsChanged = (proteins) => {
        this.setState({proteins: proteins})
    }

    carbsChanged = (carbs) => {
        this.setState({carbs: carbs})
    }

    fatsChanged = (fats) => {
        this.setState({fats: fats})
    }



    calculateMacros = () => {
        //Calculate macronutrients
        let caloriesResult = (this.state.proteins * 4) + (this.state.carbs * 4) + (this.state.fats * 9);

        //Setting calories state 

        if(isNaN(caloriesResult)) {
            this.setState({calories: 'Not a number'})
        }
        else {
        this.setState({calories: caloriesResult})
        }
    }



    render() { 

        return <div>
            <Navbar />
            <Switch>
            <Route exact path='/'>
                <Header />
                <Homepage />
            </Route>


            <Route exact path='/Dedalus'>
                <Header />
                <Homepage />
            </Route>


            <Route exact path='/BMI'>
                <div>
               <div className='row'>
               <h3 className='row'>Height</h3>
                <BMI placeholder='Enter height in centimeters' onChange={this.heightChanged} />
                </div>
                <div className='row'>
                <h3 className='row'>Weight</h3>
                <BMI placeholder='Enter weight in kg' onChange={this.weightChanged} />
                </div>
                    <Button label='SUBMIT' onClick={this.computeBmi} />
                    <div className='row'>
                       <h3 className='row'>BMI = {this.state.bmi}</h3>
                       <h3 className='row'>{this.state.bmiClass}</h3>
                       <h4 style={{fontSize: '20px'}}>As soon as you find out where your weight stands, jump to the <Link to='/Goal' className='linkText'>Fitness Goal</Link> page to see how to be in the shape of your life.</h4>
                       
                    </div>
                  
                </div>
            </Route>

            <Route exact path='/Goal'>
                <Goal />
            </Route>


            <Route exact path='/Macro'>
                <div>
            <div className='row'>
                       <h3 className='row'>Proteins</h3>
                <Macro  placeholder='Enter number of proteins' onChange={this.proteinsChanged}onClick={this.calculateMacros} result={this.state.calories}  />
            </div>
            <div className='row'>
                       <h3 className='row'>Carbs</h3>
                <Macro  placeholder='Enter number of carbs' onChange={this.carbsChanged} onClick={this.calculateMacros}  />
            </div>
            <div className='row'>
                       <h3 className='row'>Fats</h3>
                <Macro  placeholder='Enter number of fats' onChange={this.fatsChanged} onClick={this.calculateMacros}  />
            </div >
                <Button label='SUBMIT' onClick={this.calculateMacros} />
                <div className='row'>
                       <h3 className='row'>Calories = {this.state.calories}</h3>
                    </div>
                    </div>
            </Route>
            </Switch>

        </div>;
    }
}
 
export default App;