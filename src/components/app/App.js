import React, {useState} from 'react';
import './App.css';
import Layout from '../Layout/Layout';
import Products from '../products/products';
import PRODUCTS from './PRODUCTS.json';
import About from '../about/about';
import Blog from '../blog/blog';
import Contact from '../contact/contact';
import {
        BrowserRouter,
        Route,
        Switch,
} from 'react-router-dom';

import ThemeContext from '../../context/ThemeContext';
import ttheme from '../../configs/theme';



function App() {

  const [activeTheme,setActiveTheme] = useState('blue')


  return (
    <ThemeContext.Provider value={{
      theme: ttheme[activeTheme],
      setActiveTheme,
    }}>
    <div className="App">
    <BrowserRouter>
      <Layout>
      <Switch>
      
      
      <Route exact path="/">
        
        <Products data = {PRODUCTS}/>
      </Route>

      <Route path="/about">
        <About/>
      </Route>
      
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/blog">
        <Blog/>
      </Route>
      </Switch>
      </Layout>
    </BrowserRouter>

    </div>
    </ThemeContext.Provider>
  );
}

export default App;
