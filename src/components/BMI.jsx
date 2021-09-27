import React, { Component } from 'react';

class BMI extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''} 
    }

    handleChange = (event) => {

        //Change the state with the text input
        let inputValue = event.target.value;

        var numbers = /^[0-9]+$/;

        if (inputValue === '') {
            this.setState({value: ''})
        }

        else if (!inputValue.match(numbers)) {

            alert('Input should be a number')
        }

        else if(inputValue === 0) {
            alert('Input cannot be 0')
        }

        else (
        this.setState({ value: inputValue})
        )

        //Pass the input to App.jsx for states: 'height' and 'weight'
        this.props.onChange(inputValue);
    }

    resetButton = () => {
        this.setState({ value: '' })
      }



    render() {
        return <div className='row part3 paddingBottom40px'>
            <form>
            <label>{this.props.label}</label>
                <input type='text' value={this.state.value} placeholder={this.props.placeholder} onChange={this.handleChange} />
                <input type='reset' value='Reset' onClick={this.resetButton} />
            </form>
            </div>
        
    }
}
 
export default BMI;