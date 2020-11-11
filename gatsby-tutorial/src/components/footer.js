import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
export const Footer = () => {
    const data = useStaticQuery(graphql`
    query{
        site{
        siteMetadata{
            author
        }
        }
    }
`)
    return (
        <footer>
            <p> {data.site.siteMetadata.author} wszystkie prawa zastrzezone</p>
        </footer>
    )
}

export default Footer
