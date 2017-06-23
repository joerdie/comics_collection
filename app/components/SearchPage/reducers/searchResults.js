export default function searchReults(state = {}, action) {
  switch(action.type) {
    case 'UPDATE_SEARCH_RESULTS' :
      return {
        ...action.payload
      }
    default:
      return state;
  }
}
