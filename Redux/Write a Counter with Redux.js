const INCREMENT = 'INC'; // Define a constant for increment action types
const DECREMENT = 'DEC'; // Define a constant for decrement action types

const counterReducer = (state = 0, action) => {
  switch(action.type){
    case INCREMENT : return state + 1;
    case DECREMENT : return state - 1;
    default : return state;
  }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
  return {
    type : INCREMENT
  }
}; // Define an action creator for incrementing

const decAction = () => {
  return {
    type : DECREMENT
  }
}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers

//couting 5 times
for(let i = 0; i < 5; ++i){
  store.dispatch(incAction());
  console.log(store.getState());
}

for(let i = 0; i < 5; ++i){
  store.dispatch(decAction());
  console.log(store.getState());
}
