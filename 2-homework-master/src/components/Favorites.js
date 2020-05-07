import React from "react";
import Product from "./Product";

// function Favorites() {
//     const products = JSON.parse(localStorage.getItem("favoriteList"))
//     return (
//         <div className="productsGrid">
//             {products.map(product => <Product key={product.id} product={product} />)}
//         </div>
//     );

// }

class Favorites extends React.Component {
    constructor() {
        super();
        this.state = {
            products: JSON.parse(localStorage.getItem("favoriteList"))
        }
    }
    
    handleFav(element){
        document.getElementById(element).remove()
    }

    render() {
        return (
            <div className="productsGrid">
                {this.state.products.map(product => <Product handleFav={this.handleFav} key={product.id} product={product} />)}
            </div>
        )
    }

}

export default Favorites;