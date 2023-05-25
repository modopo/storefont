const initialState = {
  allProducts: [
    {
      name: "Computer",
      category: ['electronics'],
      description: "It's a computer.",
      price: 1000,
      quantity: 2
    },
    {
      name: "SmartWatch",
      category: ['electronics', 'softlines'],
      description: "It's a smartwatch.",
      price: 200,
      quantity: 2
    },
    {
      name: "Sweater",
      category: ['softlines'],
      description: "It's a sweater.",
      price: 20,
      quantity: 2
    },
    {
      name: "Bananas",
      category: ['food_grocery', 'pet_supplies'],
      description: "An apple(?) to feed animals or humans.",
      price: 2,
      quantity: 2
    },
    {
      name: "Dog Food",
      category: ['pet_supplies'],
      description: "It's dog food.",
      price: 14,
      quantity: 2
    }
  ],
  productsToDisplay: []
}

function productReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECTED_CATEGORY":
      return {
        ...state,
        productsToDisplay: state.allProducts.filter(prod => {
          return prod.category.includes(action.payload)
        })
      }
    case "ADD_TO_CART":
      console.log('this product reducer has been hit');
      return {
        allProducts: state.allProducts.map(item => {
          const copy = {...item};
          if (copy.name === action.payload) {
            copy.quantity -= 1;
          }
          return copy;
        }),
        productsToDisplay: [...state.productsToDisplay]
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        allProducts: state.allProducts.map(item => {
          const copy = {...item};
          if (copy.name === action.payload.name) {
            copy.quantity += action.payload.count;
          }
          return copy;
        })
      }
    default:
      return state;
  }
}

export default productReducer;