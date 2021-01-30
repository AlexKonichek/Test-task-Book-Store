import React from 'react';
import { connect } from 'react-redux';
import './shopping-cart-table.css';


import { allBooksRemovedFromCart,
         bookRemovedFromCart,
         bookAddedToCart } from '../../actions';

const ShoppingCartTable = ({ items, books, onIncrease, onDecrease, onDelete }) => {
  let totalAll;
  
  if(items.length>0){
    totalAll = Math.round(items.map((item) => item.total).reduce((acc,cur) => acc+cur));
  }
  
  const renderRow = (item) => {
    const { id, title, count, total } = item
    return (
      <tr key={id}>
        <td>{title}</td>
        <td className="text-center">
        <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm">
            <i className="fa fa-minus-circle" />
          </button>
        </td>
        <td className="text-center">{count}</td>
        <td className="text-center">
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm">
            <i className="fa fa-plus-circle" />
          </button></td>
        <td>${(total/count).toFixed(2)}</td>
        <td>${(total.toFixed(2))}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm">
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="wrap">
    <div className="shopping-cart-table">
      
      <table className="table table-responsive table-hover">
        <tbody>
        { items.map(renderRow) }
        </tbody>
      </table>

      <div className="total">
        {/* Total all: ${(totalAll).toFixed(2)} */}
      </div>
    </div>
    </div>

    
  );
};

const mapStateToProps = ({ shopingCart :{ cartItems, orderTotal }, bookList: { books } }) => {
  return {
    books,
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart ,
    onDelete: allBooksRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);