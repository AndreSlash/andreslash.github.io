import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layout'
const BlogPage=()=>{
    const dataBlog = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
            edges{
                node{
                frontmatter{
                    title
                    date
                }
                }
            }
            }
        }
    `)
    
    return(
            <Layout>
            <h1>Blog </h1>
            <p>Posts lorem ipssdsds</p>
            <ol>
                {dataBlog.allMarkdownRemark.edges.map((edge)=>{
                    return(
                        <li>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <h4>{edge.node.frontmatter.date}</h4>
                        </li>
                    )
                })}
            </ol>
            </Layout>
    )
}

export default BlogPage