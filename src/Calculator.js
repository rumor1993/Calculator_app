import React, {Component} from 'react';

class Calculator extends Component {
    state = {
        sum:0,
        calculatorState: 0,
        name:0
    }


    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }


    handleIncrease = () => {
        this.setState({
            calculatorState: this.state.name + "+",
            sum: this.state.sum + this.state.name * 1,
            name: 0
        });
    }

    handleDecrease = () => {
        this.setState({
            sum: this.state.sum - this.state.name * 1,
            name: 0
        });
    }

    handleMultiply = () => {
        this.setState({
            sum: this.state.sum * this.state.name * 1,
            name: 0
        });
    }
    
    handleDivision = () => {
        this.setState({
            sum: this.state.sum / this.state.name * 1,
            name: 0
        });
    }


    render() {
        return (
          <div className="calculator">
            <h1>계산기</h1>
            <div>값을 입력하세요 <input onChange={this.handleChange} value={this.state.name}></input> </div>
            <div>값 :  {this.state.sum} </div>
            
            
            <button onClick={this.handleIncrease}>+</button>
            <button onClick={this.handleDecrease}>-</button>
            <button onClick={this.handleMultiply}>*</button>
            <button onClick={this.handleDivision}>/</button>

          </div>
        );
      }
    }


    export default Calculator;