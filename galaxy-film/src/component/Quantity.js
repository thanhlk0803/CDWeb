import React, { ReactDOM } from "react";
export default className Quantity extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {value: 1}
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
    }
    
    increment() {
      this.setState(prevState => { ++prevState.value});
    }
    
    decrement() {

        this.setState(prevState => {value: --prevState.value});
    }
    
    render() {
      
      return (
        <div>
          <p>
          Set the quantity
         </p>
        <div className="quantity-input">
          <button className="quantity-input__modifier quantity-input__modifier--left" onClick={this.decrement}>
            &mdash;
          </button>
          <input className="quantity-input__screen" type="text" value={this.state.value} readonly />
          <button className="quantity-input__modifier quantity-input__modifier--right" onClick={this.increment}>
            &#xff0b;
          </button>  
        </div>  
        </div>
      );
    }
  }
  