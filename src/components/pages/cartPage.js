import React from 'react';
import ShopCartTable from '../shopping-cart-table';
import ShopCartForm from '../shopping-cart-form';
import { Link } from 'react-router-dom';
import './pages.css'



const CartPage = () => {
    return (
    <div className="container">
        <div className="logo">
            <Link to="/" className="text-decoration-none">Book Store</Link>
        </div>
        <div className="d-flex justify-content-center p-2 bd-highlight">
        <div className="p-2 bd-highlight stretch">
            <ShopCartTable/>
        </div>
        <div className="p-2 bd-highlight stretch">
            <ShopCartForm onSubmit={()=>{console.log('submit')}}/>
        </div>
    </div>
    </div>
    
           
    )

    
}
export default CartPage;