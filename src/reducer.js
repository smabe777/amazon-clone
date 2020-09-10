import { StateContext } from "./StateProvider";

export const initialState = {
  basket: [],
};

//Selector

export const getBasketTotalReducer = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const filteredBasket = state.basket.filter(
        (item) => item.id === action.id
      );
      let newBasket = [...state.basket];
      if (filteredBasket.length > 1) {
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );

        if (index >= 0) {
          newBasket.splice(index, 1);
        } else {
          console.warn(
            `Can't remove product (id: ${action.id}) as it's not in basket!`
          );
        }
      } else newBasket = state.basket.filter((item) => item.id !== action.id);
      /*   return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      }; */
      return { ...state, basket: newBasket };
    case "SET_USER":
      return { ...state, user: action.user };
    default:
      console.log("NOTHING");
      return state;
  }
};

export default reducer;
