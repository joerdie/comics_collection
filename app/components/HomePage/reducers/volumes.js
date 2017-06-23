export default function volumes(state = {}, action) {
  switch(action.type) {
    case 'UPDATE_HOME_PAGE_VOLUMES' :
      return {
        ...action.payload
      }
    default:
      return state;
  }
}
