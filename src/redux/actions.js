export const TOGGLE_WISHLIST = "TOGGLE_WISHLIST";
export const SET_SLUGS = 'SET_SLUGS';

export const toggleWishlist = (index) => ({
  type: TOGGLE_WISHLIST,
  payload: index,
});


// export const setSlugs = (slugs) => ({
//     type: SET_SLUGS,
//     payload: slugs,
//   });