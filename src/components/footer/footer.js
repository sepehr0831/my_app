import React,{useContext} from 'react'
import './footer.css'
import ThemeContext from '../../context/ThemeContext';

const Footer = () => {

    const themeValues = useContext(ThemeContext)

    return(

    <div className='Footer'>
        Deloped by Sepehr
        <div>
            <button onClick={() => themeValues.setActiveTheme('green')} className='Green'>Green</button>
            <button onClick={() => themeValues.setActiveTheme('blue')} className='blue'>Blue</button>

        </div>
    </div>
)}

export default Footer;