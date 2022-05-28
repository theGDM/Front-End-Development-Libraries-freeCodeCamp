const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
    const newObject = Object.assign({}, state);
    newObject.status = 'online'
    // console.log(state);
    // console.log(newObject);
    // Don't mutate state here or the tests will fail
      return newObject;
    default:  
      return state;
  }
};

//action creator
const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
// store.dispatch(wakeUp());
