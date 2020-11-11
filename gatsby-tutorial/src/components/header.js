import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
// import './header.module.scss'
import headerStyles from './header.module.scss'
export const Header = () => {
    const data = useStaticQuery(graphql`
        query{
            site{
            siteMetadata{
                title,
                author
            }
            }
        }
    `)
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <ul className={headerStyles.navList}>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
            </ul>
        </header>
    )
}
export default Header
