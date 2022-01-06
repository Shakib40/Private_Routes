import React from 'react';
import { useParams } from "react-router-dom";

export const  ProductDetails = () => {
    
    const [products,setProducts] = React.useState({});
    const {productsId} = useParams();

    const getProductDetails =() => {
        fetch(`http://localhost:3001/products/${productsId}`)
        .then((d) => d.json())
        .then((res) =>{ setProducts(res)});
    }
    
    React.useEffect(() =>{
        getProductDetails()
    },[]);


    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{products.id}</td>
                        <td>{products.Name}</td>
                        <td>{products.Price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}