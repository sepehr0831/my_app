import React, { useContext ,useState, useReducer, useEffect , useRef} from "react";
import Button from "../button/button";
import Image from "../images/image";
import ThemeContext from "../../context/ThemeContext";
import ProductItemReducer from "./productitem.reducer";
import CartContext from "../../context/CartCantext";
/* eslint-disable */

const ProductItem = ({data}) => {

    const themeValues = useContext(ThemeContext);
    const {dispatchCart} = useContext(CartContext)

    const [added,setadded] = useState(false);
    const [state,dispatch] = useReducer(ProductItemReducer,{
    added: false,
    })

    const productItemRef = useRef(null)

    const handleAdd = () => {
      if (state.added){
        dispatch({
          type: "REMOVE_FROM_CART",
        })

        dispatchCart({
          type: "REMOVE_FROM_CART",
        })


      }else{
      dispatch({
        type: "ADD_TO_CART",
        id: data.id,
      });

      dispatchCart({
        type: "ADD_TO_CART",
        id: data.id,
      });
    }
    }


    useEffect(() => {
      productItemRef.current.classList.add('visible');
    }
    ,[]);

    

    return(
    <li className="ProductItem"  ref={productItemRef}>
    <h3>{data.name}</h3>
    <Image imgs={data.image}/>
    <span>Price: {data.price}</span>

    <Button


     style={{
      color:themeValues.theme.color,
      borderColor:themeValues.theme.color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
      
     }}

     handleclick={handleAdd}

    text={state.added ? 'Remove from Cart  ' : 'Add to Cart'} 
 
    />

    

  </li>)
}

export default ProductItem;