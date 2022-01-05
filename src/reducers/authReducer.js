
const userInitialState = {
    user: {},
    isAuthenticated: false
}

const authReducer = (state = userInitialState, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            };
        default: 
            return state;    
    }
}

export default authReducer;