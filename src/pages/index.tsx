import React from 'react';
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
export default ({data}) => {
    console.log(data)
    return (
    <Layout>
        Hello world from Panacloud!
        <h1>{data.allContentfulBlogPost.edges[0].node.title}</h1>    
    </Layout>)
}
export const query = graphql`
  query {
    allContentfulBlogPost {
        edges {
          node {
            title
            content {
              json
            }
          }
        }
      }
  }
`

