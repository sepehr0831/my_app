import React,{useContext} from 'react';
import { useLocation } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import CartContext from "../../context/CartCantext";


import './header.css';
import Navbar from '../navbar/navbar';

const header = () => {
     // eslint-disable-next-line
    let pathname = useLocation().pathname
    console.log(pathname);
    let title = "";
         // eslint-disable-next-line
    const {carts} = useContext(CartContext)

    switch (pathname) {
        case '/':
            title = 'Shop'
            break;
        case '/about' :
            title = 'About'
            break;
        case '/blog' :
            title = 'Blog'
            break;
        case '/contact':
            title = 'Contact'
            break;
        default:
            break;
    }

    return(

    <div className="Header">

        <Navbar/>

       <div className='cart'>
        <h4>{carts.length}&nbsp;<MdShoppingCart /></h4>
       </div>

        <h3>
            {title}
        </h3>

    </div>
)}

export default header;