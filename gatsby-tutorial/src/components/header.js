import React from 'react'
import {Link} from 'gatsby'
// import './header.module.scss'
import headerStyles from './header.module.scss'
export const header = () => {
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    Andrzej Serafin
                </Link>
            </h1>
            <ul className={headerStyles.navList}>
                <li><Link className={headerStyles.navItem} to="/">Home</Link></li>
                <li><Link className={headerStyles.navItem} to="/contact">Contact</Link></li>
                <li><Link className={headerStyles.navItem} to="/blog">Blog</Link></li>
                <li><Link className={headerStyles.navItem} to="/about">About</Link></li>
            </ul>
        </header>
    )
}
export default header
