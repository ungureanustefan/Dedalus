import React, { Component } from 'react';

class Macro extends Component {
	constructor(props) {
        super(props);
		this.state = {value: ''} 

    }

	handleChange = (event) => {
                //Change the state with the text input

        let inputValue = event.target.value;

        var numbers = /^[0-9]+$/;

        if(!inputValue.match(numbers)) {
            alert('Input should be a number')
        }
        else (
        this.setState({ value: inputValue})
        )

        //Pass the input to App.jsx for states: 'proteins', 'cabs' and 'fats'
        this.props.onChange(inputValue);
    }

    resetButton = () => {
        this.setState({ value: '' })
      }
	
    render() { 
        return <div className='row part3 paddingBottom40px'>
			<form>
           <label>{this.props.label}</label>
		            <input  type='text' placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange} />
                    <input type='reset' value='Reset' onClick={this.resetButton} />
			</form>	        
         </div>
    
    }
}
 
export default Macro;