// Define ADD, addMessage(), messageReducer(), and store here:
//defining action add
const ADD = 'ADD';

//action creator
const addMessage = (message) => {
  return {
    type : ADD,
    message
  }
}

// Use ES6 default paramter to give the 'previousState' parameter an initial value.
const messageReducer  = (prevState = [] ,action) =>{
  switch(action.type){
  // Use ES6 spread operator to return a new array where the new message is added to previousState
    case ADD : return [...prevState, action.message]
    default : return prevState;
  }
}

//creating redux store
const store = Redux.createStore(messageReducer);

// store.dispatch(addMessage("Hey!"));
// console.log(store.getState());

// store.dispatch(addMessage("my"));
// console.log(store.getState());
