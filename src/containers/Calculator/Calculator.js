import React from 'react';
import './Calculator.css';
import {connect} from 'react-redux';
const Calculator = props => {
    return (
        <div className='Calculator'>
            <div className='Calc-wrapper'>
                <div className='Screen' style={{'background': props.rightState ? 'green' : '#ffffff'}} >{props.passwordState}</div>
                <div className='Buttons'>
                    <div className='btns'>
                        <button onClick={() => props.add(1)}>1</button>
                        <button onClick={() => props.add(2)}>2</button>
                        <button onClick={() => props.add(3)}>3</button>
                    </div>
                    <div className='btns'>
                        <button onClick={() => props.add(4)}>4</button>
                        <button onClick={() => props.add(5)}>5</button>
                        <button onClick={() => props.add(6)}>6</button>
                    </div>
                    <div className='btns'>
                        <button onClick={() => props.add(7)}>7</button>
                        <button onClick={() => props.add(8)}>8</button>
                        <button onClick={() => props.add(9)}>9</button>
                    </div>
                    <div className='btns'>
                        <button onClick={props.remove}>&lt;</button>
                        <button onClick={() => props.add(0)}>0</button>
                        <button onClick={props.check}>E</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        passwordState: state.password,
        rightState: state.right,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        add: (num) => dispatch({type: 'ADD_NUM', value: num}),
        remove: () => dispatch({type: 'REMOVE_NUM'}),
        check: () => dispatch({type: 'CHECK'})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
