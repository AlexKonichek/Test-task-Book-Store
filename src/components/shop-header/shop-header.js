import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './shop-header.css'

const ShopHeader = ({items, total}) => {
    let totalAll = null;
    let itemsNum = null;
    if(items.length>0){
        totalAll = Math.round(items.map((item) => item.total).reduce((acc,cur) => acc+cur)) +'$';
        itemsNum = items.map((item) => item.count).reduce((acc,cur) => acc+cur);
        

    }

   
    return (
        <header className="shop-header row fixed-top">
            <Link to="/" className="text-decoration-none">
            <div className="logo">Book Store</div>
            </Link>
            <Link to="/cart" className="text-decoration-none">
            <div className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart fa-2x mr-5" />
                <span className="circle">{itemsNum}</span>
                
                <b>Total: {totalAll}</b>
            </div>
            </Link>
            

        </header>

    )
}

const mapStateToProps = ({ shopingCart :{ cartItems, orderTotal } }) => {
    return {
      items: cartItems,
      total: orderTotal
    };
  };
  
  
  export default connect(mapStateToProps)(ShopHeader);