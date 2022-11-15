import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`increased ${action.payload.name} quantity in cart`, {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`Added ${action.payload.name} to cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const filteredItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = filteredItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`Removed ${action.payload.name} from cart`, {
        position: "bottom-left",
      });
    },
    decreaseQuantityInCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info(`Decreased ${action.payload.name} quantity in cart`, {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const filteredItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = filteredItems;
        toast.error(`Removed ${action.payload.name} from cart`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // increaseQuantityInCart ( state, action )
    // {
    //   const itemIndex = state.cartItems.findIndex( ( cartItem ) => cartItem.id === action.payload.id )
      
    //   if (state.cartItems[itemIndex].cartQuantity >= 1)
    //   {
        
    //   }

    // }
  },
});

export const { addToCart, removeFromCart, decreaseQuantityInCart } = cartSlice.actions;
export default cartSlice.reducer;
