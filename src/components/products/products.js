import React from "react";
import ProductItem from "../Productitem/productitem";

const products = ({data}) => (
    <ul className='products'>
        {data.map((item)=>(
            <ProductItem  data={item}/>

        ))}

    </ul>
)

export default products;