import React from "react";
import './button.css'

const Button = ({text,handleclick,...props}) => <button className="button" {...props} onClick={handleclick}>{text}</button>


export default Button;





