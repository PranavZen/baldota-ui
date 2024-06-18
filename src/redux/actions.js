export const TOGGLE_WISHLIST = "TOGGLE_WISHLIST";
export const TOGGLE_ACCORDION = "TOGGLE_ACCORDION";
export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const DECREMENT_COUNT = "DECREMENT_COUNT";

export const toggleAccordian = (index) => ({
  type: TOGGLE_ACCORDION,
  payload: index,
});

export const toggleWishlist = (index) => ({
  type: TOGGLE_WISHLIST,
  payload: index,
});

export const incrementCount = () => ({
  type: INCREMENT_COUNT,
});

export const decrementCount = () => ({
  type: DECREMENT_COUNT,
});
