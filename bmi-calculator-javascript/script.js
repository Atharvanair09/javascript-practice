// const heightValue = document.getElementById("height");
// const heightChoice = document.getElementById("heightUnit");
// const weightChoice = document.getElementById("weightUnit");
// const weightValue = document.getElementById("weight");
// const resultButton = document.getElementById("bmiForm");
// const resultAns = document.getElementById("result");

// resultButton.addEventListener("submit",  calculateBmi);

// async function calculateBmi(e){
//     e.preventDefault();

//     const height = parseFloat(heightValue.value);
//     const choiceh = heightChoice.value;
//     const choicew = weightChoice.value;
//     const weight = weightValue.value;

//     if(choiceh=="m" && choicew=="kg"){
//         const bmi = weight / (height*height);
//         resultAns.textContent = `${bmi}`
//     }
//     else if(choiceh=="in" && choicew=="lb"){
//         const bmi = (weight / (height*height))*703;
//         resultAns.textContent = `${bmi}`
//     }
// }

import React from 'react'

class SimpleClass extends React.Component{
    constructor(){
        super();
        this.state = {
            name: ''
        }
    }

    handleChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Hello, ${this.state.name}, Welcome Back`);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Enter Your Name: 
                    <input type='text' value={this.state.name} onChange={this.handleChange}></input>
                    <button type='submit'>Click Me</button>
                </label>
            </form>
        );
    }
}

export default SimpleClass;