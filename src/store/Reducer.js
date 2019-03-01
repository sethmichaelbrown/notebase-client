const initialState = {
  displayCodeEditor: true,
  displayTextEditor: true,
  userInformation: {}
}

const reducer = (state = initialState, action) => {
  const newState = { ...state }


  if (action.type === 'authenticated') {
    newState.isAuthenticated = true
    return newState
  }


  return newState
}


export default reducer