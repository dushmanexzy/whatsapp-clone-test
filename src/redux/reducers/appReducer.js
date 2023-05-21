const initialState = {
  debug: true,
  loaded: true,
  // авторизация до конца не настроена, поэтому изменив значение на True можно посмотреть внешний вид мессенджера
  session: false
}

export function AppReducer(state = initialState, action) {
  switch (action.type) {
    case "APP_STATE":
      return { ...state, ...action.state }
    default:
      return state;
  }
}
