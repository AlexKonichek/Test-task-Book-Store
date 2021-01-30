import updateShoppingCart from './shoppingCart';
import updateBookList from './bookList';




const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shopingCart: updateShoppingCart(state, action),
  };
};

export default reducer;