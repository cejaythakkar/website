const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter : 0
}

// reducer

const rootreducer = (state = initialState, action ) => {
    switch(action.type){
        case 'INC_COUNTER':
            return {
                ...state,
                counter : state.counter + 1
            };
        case 'ADD_COUNTER':
        return {
            ...state,
            counter : state.counter + action.value
        }
    }
    return state
}

// store
const store = createStore(rootreducer);
console.log(store.getState());

// subscription
store.subscribe(() => {
    console.log('[subsctiption]', store.getState());
});

// dispatching action

store.dispatch({
    type:'INC_COUNTER'
});
store.dispatch({
    type:'ADD_COUNTER',
    value : 10
});
console.log(store.getState());


