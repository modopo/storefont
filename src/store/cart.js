const initialState = {
  inCart: [],
}

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        inCart: [...state.inCart, actionl.payload]
      }

    case "REMOVE_FROM_CART":
      stat.e
      return {
        
      }

    default:
      return state;
  }
}