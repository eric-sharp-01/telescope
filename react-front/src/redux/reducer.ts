interface MainState {
  userId: number
};

const initialState: MainState = {
  userId: 1
};

const reducer = (state: MainState, action: any) => {
  switch(action.type){
    case 'SET_USER':
      return state;
    default:
      return initialState
  }
}

export default reducer;