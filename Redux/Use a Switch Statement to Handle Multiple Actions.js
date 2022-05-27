const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch(action.type){
    case 'LOGIN': return {authenticated : true}
    case 'LOGOUT' : return {authenticated : false}
    default : return state;
  }
  // Change code above this line
};

const store = Redux.createStore(authReducer);

//action creator to login users 
const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

//action creator to logout users
const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};

//checking whether authenticated property in state set to true or not
//based on the actions 
store.dispatch(loginUser());
let currentState = store.getState();
console.log(currentState.authenticated);

store.dispatch(logoutUser());
currentState = store.getState();
console.log(currentState.authenticated);
