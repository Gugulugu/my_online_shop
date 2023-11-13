import React, {Component} from "react";
import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCart from "./components/shopping-cart";


class App extends Component {
    state = { items: [] } 

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;
        currentItems.push({
            amount,
            name,
            price
        });
        this.setState({items: currentItems});
        console.log(this.state)

    }

    render() { 
        return <React.Fragment>
            <Navbar/>
            <div className="main-container">

                <div className="product-container">
                <Product onAdd = {() => this.addItem(1, "Pumpkins", 2.99)} image = "pumpkins.jpg" title = "Pumpkins"/>
                <Product onAdd = {() => this.addItem(1, "Grapes", 2.99)} image = "grapes.jpg" title = "Grapes"/>
                <Product onAdd = {() => this.addItem(1, "Pears", 2.99)} image = "pears.jpg" title = "Pear"/>
                <Product onAdd = {() => this.addItem(1, "Apples", 2.99)} image = "apples.jpg" title = "Apple"/>
                </div>
                <ShoppingCart items = {this.state.items}/>
                            
            </div>

        </React.Fragment>;
    }
}
 
export default App;