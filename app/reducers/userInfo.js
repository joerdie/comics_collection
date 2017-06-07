const initialState = {};

export default function userInfo(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_USER_INFO' :
      return {
        uid: action.uid,
        ...action.payload
      };
    case 'CLEAR_USER_INFO' :
      return initialState;
    default:
      return state;
  }
}
