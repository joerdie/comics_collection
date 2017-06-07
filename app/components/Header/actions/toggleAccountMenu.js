import store from 'store';

export function toggleAccountMenu(open) {
  store.dispatch({
    type: 'MY_ACCOUNT_MENU_TOGGLE',
    open
  })
}
