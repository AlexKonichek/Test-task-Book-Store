import React, { Component } from 'react';
import { connect } from 'react-redux';

class shoppingCartForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      address: '',
      phone: ''
    };
    
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = {
      items:this.props.items,
      customer:this.state
    }
    let seriallyzeData = JSON.stringify(data);
    alert(seriallyzeData);
  }

  
  handleNameChange(event) {
    let key = event.target.attributes.placeholder.nodeValue.toLowerCase();
    this.setState({[key]: event.target.value});
  }
  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
            <input 
              className="form-control" 
              id="Name"
              type="text"
              placeholder="NAME"
              value={this.state.name}
              onChange={this.handleNameChange}/>
          </div>
          <div className="mb-3">
            
            <input 
              className="form-control" 
              id="Surname"
              type="text"
              placeholder="SURNAME"
              value={this.state.surname}
              onChange={this.handleNameChange}/>
          </div>
          <div className="mb-3">
            
            <input 
              className="form-control" 
              id="ADDRESS"
              type="text"
              placeholder="ADDRESS"
              value={this.state.address}
              onChange={this.handleNameChange}/>
          </div>
          <div className="mb-3">
            
            <input 
              className="form-control" 
              id="PHONE"
              type="text"
              placeholder="PHONE"
              value={this.state.phone}
              onChange={this.handleNameChange}/>
          </div>
          <button type="submit" className="btn btn-primary w-100">ORDER</button>
      </form>
      </div>
    );
  }
}

const mapStateToProps = ({ shopingCart :{ cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};


export default connect(mapStateToProps)(shoppingCartForm);