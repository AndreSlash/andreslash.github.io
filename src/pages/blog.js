import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
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
                    fields{
                        slug
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
            <ol  className={blogStyles.posts} >
                {dataBlog.allMarkdownRemark.edges.map((edge)=>{
                    return(
                        
                            <li className={blogStyles.post}>
                                <Link key={edge.node.fields.slug} to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <h4>{edge.node.frontmatter.date}</h4>
                                </Link>
                            </li>
                       
                    )
                })}
            </ol>
            </Layout>
    )
}

export default BlogPage