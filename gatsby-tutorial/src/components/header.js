import React from 'react'
import {Link} from 'gatsby'
export const header = () => {
    return (
        <header>
            Welcome 
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </header>
    )
}
export default header
