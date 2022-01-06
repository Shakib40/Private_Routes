import React from 'react';
import {Link} from 'react-router-dom';

export const Products = () => {

    const [products,setProducts] = React.useState([]);

    const getProducts = () => {
        fetch("http://localhost:3001/products")
        .then((d) => d.json())
        .then((res) =>{ setProducts(res)});
    };
    
    React.useEffect(() =>{
        getProducts()
    },[]);


    return(
        <>
        <div className="productList">
        {products.map((e , i) =>
            <div>
                <Link key={i} to={`/products/${e.id}`}>
                    {e.Name} 
                </Link>
            </div> 
        )}
        </div>
        </>
    )
};
