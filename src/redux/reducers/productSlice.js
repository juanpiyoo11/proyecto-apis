export const loadProductsSuccess = (products) => ({
  type: "LOAD_PRODUCTS_SUCCESS",
  payload: products,
});

// src/redux/reducers/productReducer.js
const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS_SUCCESS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
