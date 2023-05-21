const initialState = {
  debug: true,
  loaded: true,
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
