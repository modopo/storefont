const initialState = {
  inCart: [],
  totalCount: 0
}

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      let idx = state.inCart.findIndex(elem => elem.name === action.payload);
      if (idx < 0) {
        return {
          inCart: [...state.inCart, {
            name: action.payload,
            count: 1
          }],
          totalCount: state.totalCount + 1
        }
      } 
      return {
        inCart: state.inCart.map(item => {
          const copy = {...item};
          if (copy.name === action.payload) {
            copy.count += 1;
          }
          return copy;
        }),
        totalCount: state.totalCount + 1
      }

    case "REMOVE_FROM_CART":
      idx = state.inCart.findIndex(elem => elem.name === action.payload);
      let countToRemove = state.inCart[idx].count;

      return {
        inCart: state.inCart.splice(idx, 1),
        totaCount: state.totalCount - countToRemove
      }

    default:
      return state;
  }
}

export default cartReducer;