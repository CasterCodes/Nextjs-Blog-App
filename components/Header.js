import React from 'react'

import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
           <h1 className={headerStyles.title}> <span>CasterCodes</span>  New</h1> 
           <p className={headerStyles.description}>Get latest software development news</p>
        </div>
    )
}

export default Header
