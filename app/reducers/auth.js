export default function authenticated(state = 'waiting', action) {
  switch(action.type) {
    case 'ADD/UPDATE_AUTH' :
      return {...action.payload};
    default:
      return state;
  }
}
