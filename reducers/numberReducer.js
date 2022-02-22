export const numberReducer = (initial=0,action) => {
    switch (action.type) {
        case 'INCREMENT':
            return initial + action.payload; 
        case 'DECREMENT':
            return initial - action.payload
        default:
            return initial; 
    }
}