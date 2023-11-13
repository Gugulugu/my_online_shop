import React, {Component} from "react";

class ShoppingCart extends Component {
    state = {     } 
    render() { 
        return <div className="shopping-cart">
            <h1>Shopping Cart</h1>
            {this.props.items.map(item => <div key={item.id}> {item.amount} x {item.name} {item.price}€ </div>)}
        </div>;
    }
}
 
export default ShoppingCart;