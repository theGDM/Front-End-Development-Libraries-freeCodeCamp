const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO: let newState = [...state];
    newState.push(action.todo);
    return newState;
      // Don't mutate state here or the tests will fail
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo : todo
  }
}

const store = Redux.createStore(immutableReducer);

// store.dispatch(addToDo("Washing the cloths"));
// console.log(store.getState());

// store.dispatch(addToDo("Go to Market"));
// console.log(store.getState());
