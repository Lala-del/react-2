import React from "react";
import Product from "./Product";

function AddedFiles() {
    return(
        <div>
            <h1>Your Musics are here!</h1>
        </div>
    );
    // const products=JSON.parse(localStorage.getItem("addedFiles"))
    // return(
    //     <div>
    //         {products.map(product => <Product key={product.id}  product={product} />)}
    //     </div>
    // );

}

export  default AddedFiles;
