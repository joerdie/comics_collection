export default function seriesDashBoard(state = {}, action) {
  switch(action.type) {
    case 'ADD_SERIES_TO_SERIES_DASHBOARD' :
      return {
        ...action.payload
      }
    case 'REMOVE_SERIES_TO_SERIES_DASHBOARD' :
      delete state[action.id];
      return {...state}
    default:
      return state;
  }
}
