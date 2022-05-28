const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE : 
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

//action creator
const addNoteText = (note) => {
  // Change code below this line
  return { //action object
    type : ADD_NOTE,
    text : note
  }
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
