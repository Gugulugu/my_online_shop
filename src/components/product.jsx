import React, { Component } from 'react';


class Product extends Component {
    state = {  } 
    render() { 
        return <div className="card" styles={{width: '8rem'}}>
        <img src={"assets/img/" + this.props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button onClick = {this.props.onAdd} href="#" class="btn btn-primary">Add</button>
        </div>
      </div>;
    }
}
 
export default Product;