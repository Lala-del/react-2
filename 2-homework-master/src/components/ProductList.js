import React from 'react'
import Product from './Product';
import Axios from 'axios';
import Modal from './ModalCard';

class ProductList extends React.Component {
    constructor() {
        super();
        const favorite =localStorage.getItem("favoriteList") !=null  ? JSON.parse(localStorage.getItem("favoriteList")) : [];
        this.state = {
            products: [],
            favoriteList: [...favorite]
        }
    }

    // componentWillMount() {
    //     localStorage.getItem("favoriteList") && this.setState({
    //         favorite : [...JSON.parse(localStorage.getItem("favoriteList"))]
    //     })
    // }

    handleStar = (obj) => {
        this.setState(prevState => ({
            favoriteList: [...prevState.favoriteList,obj],
        }))
    };

    componentDidMount() {
        Axios.get("products.json")
            .then(response => {
                this.setState({
                    products: response.data.products
                })
            })
    }

    componentDidUpdate(){
        localStorage.setItem("favoriteList", JSON.stringify(this.state.favoriteList))
    }

    render() {
        return (
            <div className="productsGrid">
                {this.state.products.map(product => <Product callbackHandleStar={this.handleStar} key={product.id}  product={product} />)}
            </div>
        )
    }
}

export default ProductList;