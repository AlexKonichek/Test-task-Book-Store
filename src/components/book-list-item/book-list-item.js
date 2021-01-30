import React from 'react';

const BookListItem = ({ book, onAddedToCart }) => {
   const { author, title, price, coverImage} = book;
   return (  
            <div className="card card-size text-justify">
              <div className="mr-auto">
                <img src={coverImage} className="card-img-top" alt="cover"/>
                </div>
            
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <h6 className="card-title">{author}</h6>
                  <div className="d-flex justify-content-between">
                    <div className="p-2">
                      <span className="badge badge-dark">{price}$</span>
                    </div>
                    <div className="p-2">
                      <span className="badge badge-info">
                        <button
                          onClick={onAddedToCart}
                          className="btn btn-info add-to-cart">
                          Add to cart
                        </button>
                      </span>
                    </div>
                  </div>
                  
                  
                    
                    
                </div>
            </div>
          )
}

export default BookListItem;