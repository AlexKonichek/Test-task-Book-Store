import updateShoppingCart from './shoppingCart';
import updateBookList from './bookList';
import { reducer as formReducer} from 'redux-form';




const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shopingCart: updateShoppingCart(state, action),
    forms:formReducer(state,action)
  };
};

export default reducer;