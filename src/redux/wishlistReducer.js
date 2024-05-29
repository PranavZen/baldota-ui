const initialWishlistState = {
  wishlist: [],
};

const wishlistReducer = (state = initialWishlistState, action) => {
  switch (action.type) {
    case "TOGGLE_WISHLIST":
      const index = action.payload;
      return {
        ...state,
        wishlist: state.wishlist.includes(index)
          ? state.wishlist.filter((item) => item !== index)
          : [...state.wishlist, index],
      };
    default:
      return state;
  }
};

export default wishlistReducer;
