import React, { Component } from 'react'
import AddToCard from './AddToCard';
import 'font-awesome/css/font-awesome.min.css';


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fav: false,
            favList: []
        }
    }

    // handleStar = (e) => {
    //     e.target.style.color = "red";
    //     e.currentTarget.style.pointerEvents = "none"
    //     this.props.callbackHandleStar(this.props.product)
    //     // style={{pointerEvents:this.state.click && "none"}}

    // }

    handleFav = (e) => {
        const parentElement = e.currentTarget.parentElement.id;
        if (this.state.fav) {
            const newFav=this.state.favList.filter(item => item.id != this.props.product.id);
            this.setState({
                favList: newFav
            })
            this.props.handleFav(parentElement)
        }
        else {
            e.target.style.color = "red";
            this.props.callbackHandleStar(this.props.product)
        }
    }

    componentWillMount() {
        const list = localStorage.getItem("favoriteList") != null ? JSON.parse(localStorage.getItem("favoriteList")) : [];
        this.setState({
            favList: [...list]
        })
    }

    componentDidMount() {
        const result = this.state.favList.findIndex(item => item.id == this.props.product.id)
        this.setState({
            fav: result != -1 ? true : false
        })
    }

    componentDidUpdate() {
        // console.log(this.state.favList)
        localStorage.setItem("favoriteList", JSON.stringify(this.state.favList))
    }

    render() {
        const product = this.props.product;
        console.log(this.state.favList)
        return (
            <div className="musicCard" id={"product-" + product.id}>
                <img src={product.image} alt="" />
                <span>
                    <strong>{product.name}</strong> <i>by Artist</i>
                </span>
                <a href="#" onClick={this.handleFav} id={product.id} >
                    <i className="fa fa-star  star-icon" style={{ color: this.state.fav && "red" }}></i>
                </a>
                <p className={"text"}>
                    <strong>Add your favorite song to your playlist</strong>
                </p>
                <strong className={"price"}>${this.props.product.price}</strong>
                <AddToCard />
            </div>
        )
    }
}

export default Product;