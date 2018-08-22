export const LIKE_PRODUCT = "LIKE_PRODUCT";

export const likeProduct = id => {
  return {
    type: LIKE_PRODUCT,
    id
  };
};
