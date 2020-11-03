import React from 'react';
import {Link} from 'gatsby'
export default () => {
    return(
          <div>
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/contact">Contact</Link>
               <Link to="/product">Product</Link>
               <Link to="/blogpost">BlogPost</Link>
               
        </div>
    )
}