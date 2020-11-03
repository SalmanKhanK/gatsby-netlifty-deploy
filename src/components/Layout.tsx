import React from 'react'
import Navbar from './navbar'

export default ({children}) => {
    return (
        <div>
                  <Navbar />
                  {children}
        </div>
    )
}
