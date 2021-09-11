const initialState = {
  breeds: [],
  loadingState: 'PENDING',
  get isLoading() {
    return this.loadingState === 'LOADING'
  },
  get isError() {
    return this.loadingState === 'ERROR'
  },
}

const dogsReducer = (state: any = initialState, action: any) => {
  let newState = { ...state }

  if (action.type === 'DOGS_DATA_SET') {
    newState.breeds = action.payload
  } else if (action.type === 'DOGS_LOADING_STATE_SET') {
    newState.loadingState = action.payload
  }

  return newState
}

export default dogsReducer
