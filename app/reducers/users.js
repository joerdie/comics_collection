export default function users(state = {}, action) {
  switch(action.type) {
    case 'ADD/UPDATE_USER' :
      state[action.ID] = {...state[action.ID], ...action.payload}
      return {...state};
    case 'ADD_USER' :
      state[action.ID] = {...state[action.ID], ...action.payload}
      return {...state};
    case 'UPDATE_USER' :
      state[action.ID] = {...state[action.ID], ...action.payload}
      return {...state};
    case 'REMOVE_USER' :
      delete state[action.ID]
      return {...state};
    default:
      return state;
  }
}
