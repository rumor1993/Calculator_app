import React, {Component} from 'react';
import './Calculator.css';

class Calculator extends Component {
    state = {
        view:'',
        sum:'',
    } 

    
    handleAdd = (e) => {
        this.setState({
            view: this.state.view + e.currentTarget.textContent
            
        })
    }

    handleCalc = () => {
        this.setState({
          sum: eval(this.state.view),
          
        })
    }

    handleCancel = () => {
        this.setState({
            view: '',
            sum:''
        })
    }

    render() {
        return (
          <div className="calculator">

        <h1>계산기</h1>
            <input value={this.state.view}></input> 
               
               
                <table>

             

                 <tr>
                    <td><button onClick={this.handleAdd}>1</button></td>
                    <td><button onClick={this.handleAdd}>2</button></td>
                    <td><button onClick={this.handleAdd}>3</button></td>
                    <td><button onClick={this.handleAdd}>+</button></td>
                </tr>

                <tr>
                    <td><button onClick={this.handleAdd}>4</button></td>
                    <td><button onClick={this.handleAdd}>5</button></td>
                    <td><button onClick={this.handleAdd}>6</button></td>
                    <td><button onClick={this.handleAdd}>-</button></td>
                </tr>

                <tr>
                    <td><button onClick={this.handleAdd}>7</button></td>
                    <td><button onClick={this.handleAdd}>8</button></td>
                    <td><button onClick={this.handleAdd}>9</button></td>
                    <td><button onClick={this.handleAdd}>*</button></td>
                </tr>

                    <tr>
                    <td></td>
                    <td><button onClick={this.handleAdd}>0</button></td>
                    <td><button onClick={this.handleCancel}>C</button></td>
                    <td><button onClick={this.handleAdd}>/</button></td>
                </tr>
            </table>

            <button onClick={this.handleCalc}>result</button> 
             
             <div>값 :  {this.state.sum} </div>
            
            

          </div>
        )
      }
    }
    


    export default Calculator;