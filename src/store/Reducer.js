const initialState = {
  displayCodeEditor: false,
  displayTextEditor: false,
  displayLogin: false,
  displaySignUp: false,
}

const reducer = (state = initialState, action) => {
  const newState = {...state}

  if(action.type === 'loginClick'){
    newState.displayLogin = true
    return newState
  }

  return newState
}


export default reducer