export default function myAccountMenu(state = {open: false}, action) {
  switch(action.type) {
    case 'MY_ACCOUNT_MENU_TOGGLE' :
      return {
        open: action.open
      };
    default:
      return state;
  }
}
