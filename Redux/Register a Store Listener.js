const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
store.subscribe(counter);
store.subscribe(sayHi);
function counter(){
  count = count + 1;
}

function sayHi(){
  console.log("Hi!")
}
// Change code above this line

store.dispatch({type: ADD});
console.log(store.getState());
console.log(count);
store.dispatch({type: ADD});
console.log(store.getState());
console.log(count);
store.dispatch({type: ADD});
console.log(store.getState());
console.log(count);
