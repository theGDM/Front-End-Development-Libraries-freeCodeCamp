const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      // let newArr = state.filter((ele, idx) => {
      //   if(idx != action.index){
      //     return ele;
      //   }
      // });
      let newArr = [...state.slice(0, action.index),
                    ...state.slice(action.index + 1, state.length)];
      console.log(state);
      console.log(newArr);
      return newArr;
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
// store.dispatch(removeItem(3));
// store.dispatch(removeItem(2));
// store.dispatch(removeItem(1));

// [ 0, 1, 2, 3, 4, 5 ]
// [ 0, 1, 2, 4, 5 ]
// [ 0, 1, 2, 4, 5 ]
// [ 0, 1, 4, 5 ]
// [ 0, 1, 4, 5 ]
// [ 0, 4, 5 ]
