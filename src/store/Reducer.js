const initialState = {
  displayCodeEditor: true,
  displayTextEditor: true,
  displayLogin: false,
  displaySignUp: false,
  isAuthenticated: false,
  userInformation: {}
}

const reducer = (state = initialState, action) => {
  const newState = { ...state }

  if (action.type === 'loginClick') {
    newState.displayLogin = true
    return newState
  }

  if (action.type === 'homeClick') {
    newState.displayLogin = false
    return newState
  }

  if (action.type === 'authenticated') {
    newState.isAuthenticated = true
    return newState
  }


  return newState
}


export default reducer