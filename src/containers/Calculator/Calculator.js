import React from 'react';
import './Calculator.css';
import {connect} from 'react-redux';
const Calculator = props => {
    return (
        <div className='Calculator'>
            <div className='Calc-wrapper'>
                <div className='Screen'>
                    {props.resultState ? <div>{props.resultState}</div> : <div>{props.firstNumState} {props.operatorState} {props.secondNumState}</div>}

                </div>
                <div className='Buttons'>
                    <div className='btns'>
                        <button onClick={() => props.addToScreen(1)}>1</button>
                        <button onClick={() => props.addToScreen(2)}>2</button>
                        <button onClick={() => props.addToScreen(3)}>3</button>
                    </div>
                    <div className='btns'>
                        <button onClick={() => props.addToScreen(4)}>4</button>
                        <button onClick={() => props.addToScreen(5)}>5</button>
                        <button onClick={() => props.addToScreen(6)}>6</button>
                    </div>
                    <div className='btns'>
                        <button onClick={() => props.addToScreen(7)}>7</button>
                        <button onClick={() => props.addToScreen(8)}>8</button>
                        <button onClick={() => props.addToScreen(9)}>9</button>
                    </div>
                    <div className='btns'>
                        <button onClick={props.remove}>&lt;</button>
                        <button onClick={() => props.addToScreen(0)}>0</button>
                        <button onClick={() => props.addOperator('+')}>+</button>
                    </div>
                    <div className='btns'>
                        <button onClick={() => props.addOperator('*')}>*</button>
                        <button onClick={() => props.addOperator('/')}>/</button>
                        <button onClick={() => props.addOperator('-')}>-</button>
                    </div>
                    <div className='btns equal-to'>
                        <button onClick={props.solve}>=</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        firstNumState: state.firstNum,
        secondNumState: state.secondNum,
        operatorState: state.operator,
        resultState: state.result,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addToScreen: (num) => dispatch({type: 'ADD_TO_SCREEN', value: num}),
        addOperator: (operator) => dispatch({type: 'ADD_OPERATOR', value: operator}),
        solve: () => dispatch({type: 'SOLVE'}),
        remove: () => dispatch({type: 'REMOVE'}),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
