import React ,{useReducer}from "react";

import Header from '../header/header';
import Footer from '../footer/footer';

import CartContext from "../../context/CartCantext";

import  CartReducer from "../../reducer/Cart"

const Layout = ({children}) => {

    const[state,dispatch] = useReducer(CartReducer,
        {carts:[]
        });
        
    return(

        <CartContext.Provider
            value={{
                carts: state.carts,
                "dispatchCart" : dispatch
            }}
        >

        <div>
        <Header/>

        {children}
    
        <Footer/>

        </div>

        </CartContext.Provider>

)}

export default Layout;