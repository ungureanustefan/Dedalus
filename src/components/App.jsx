import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Homepage from './Homepage';
import Macro from './Macro';
import BMI from './BMI';
import {HashRouter as Route}from 'react-router-dom';
import Link from 'react-router-dom';
import Button from './Button';
import Button2 from './Button2';
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
        this.setState({ bmi : bmiValue });
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
        this.setState({calories: caloriesResult})
    }



    render() { 

        return <div>
            <Navbar />
            <Header />
            <Route exact path='/' component={Homepage} />                        
            
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
                    </div>
                  
                </div>
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
                <Button2 label='SUBMIT' onClick={this.calculateMacros} />
                <div className='row'>
                       <h3 className='row'>Calories = {this.state.calories}</h3>
                    </div>
                    </div>
            </Route>            

        </div>;
    }
}
 
export default App;