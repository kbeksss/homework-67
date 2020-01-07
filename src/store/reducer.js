const initialState = {
    rightPassword: '1234',
    numbers: '',
    right: false,
    password: '',
};

const reducer = (state = initialState, action) => {
    if(state.numbers.length < 4 && action.type === 'ADD_NUM'){
        return {
            ...state,
            numbers: state.numbers + action.value.toString(),
            password: state.password + '*'
        };
    } else{
        switch (action.type) {

            case 'REMOVE_NUM':
                return {
                    ...state,
                    numbers: state.numbers.substring(0, state.numbers.length -1),
                    password: state.password.substring(0, state.password.length -1),
                };
            case 'CHECK':
                if(state.numbers === state.rightPassword){
                    return {
                        ...state,
                        right: true,
                        password: 'ACCESS GRANTED'
                    };
                } else{
                    break;
                }
            default:
                break;
        }
    }
    return state;
};

export default reducer;
