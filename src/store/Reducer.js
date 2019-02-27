const initialState = {
  displayCodeEditor: false,
  displayTextEditor: false
}

const reducer = (state = initialState, action) => {
  const newState = {...state}

  if(action.type === 'toFalse'){
    newState.tester = false
    return newState
  }

  return newState
}


export default reducer