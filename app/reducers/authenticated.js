export default function authenticated(state = 'waiting', action) {
  switch(action.type) {
    case 'LOGGED_IN' :
      return action.ID;
    case 'LOGGED_OUT' :
      return false;
    default:
      return state;
  }
}
