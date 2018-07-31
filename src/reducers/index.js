// counter state
export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log(action.type, state);
      return state + 1;
    case 'DECREMENT':
      console.log(action.type, state);
      return state - 1;
    case 'INCREMENT_IF_ODD':
      console.log(action.type, state);
      if (state % 2 !== 0) {
        return state + 1;
      }
      return state;
    default:
      return state;
  }
};