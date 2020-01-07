const initialState = {
    firstNum: '',
    secondNum: '',
    operator: '',
    result: null,
};

const reducer = (state = initialState, action) => {
    if(action.type === 'ADD_TO_SCREEN'){
        if(state.result){
            return {
                ...state,
                firstNum: '',
                secondNum: '',
                operator: '',
                result: null,
            }
        }
        if(!state.operator){
            return {
                ...state,
                firstNum: state.firstNum.toString() + action.value,
            }
        }else{
            return {
                ...state,
                secondNum: state.secondNum.toString() + action.value,
            }
        }
    } else if(action.type === 'ADD_OPERATOR'){
        return {
            ...state,
            operator: action.value,
        }
    } else if(action.type === 'SOLVE' && state.secondNum){
        switch (state.operator) {
            case "+":
                return {
                    ...state,
                    result: parseInt(state.firstNum) + parseInt(state.secondNum)
                };
            case '-':
                return {
                    ...state,
                    result: parseInt(state.firstNum) - parseInt(state.secondNum)
                };
            case "*":
                return {
                    ...state,
                    result: parseInt(state.firstNum) * parseInt(state.secondNum)
                };
            case "/":
                return {
                    ...state,
                    result: parseInt(state.firstNum) / parseInt(state.secondNum)
                };
            default:
                break;
        }
    } else if(action.type === 'REMOVE'){
        if(state.secondNum){
            return {
                ...state,
                secondNum: state.secondNum.substring(0, state.secondNum.length -1),
            }
        } else if(state.operator){
            return {
                ...state,
                operator: '',
            }
        } else {
            return {
                ...state,
                firstNum: state.firstNum.substring(0, state.firstNum.length -1),
            }
        }
    }
    return state;
};

export default reducer;
