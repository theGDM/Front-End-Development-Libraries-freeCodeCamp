const defaultState = {
  login: false
};

//reducer function taking two arguments, state and action
const reducer = (state = defaultState, action) => {
  // Change code below this line
  if(action.type === 'LOGIN'){
    return { //returning new copy of updated state
      login : true
    }
  }
  return state;
  // Change code above this line
};

//creating redux store
const store = Redux.createStore(reducer);

//action creator
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// store.dispatch(loginAction());  
