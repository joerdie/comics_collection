export default function searchReults(state = {}, action) {
  switch(action.type) {
    case 'UPDATE_SINGLE_VOLUME_ISSUES_SEARCH_RESULTS' :
      return {
        ...action.payload
      }
    default:
      return state;
  }
}
