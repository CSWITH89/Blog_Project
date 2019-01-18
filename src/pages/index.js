import React, {Fragment} from 'react'
import {StaticQuery, graphql } from 'gatsby'


const IndexPage = (data) => (

  <StaticQuery query={graphql`
  query Posts{
    allContentfulBlogPost{
      edges{
        node{
          title
          date
          content{
            content
          }
          image{
            fixed{
               base64
         tracedSVG
         aspectRatio
         width
         height
         src
         srcSet
         srcWebp
         srcSetWebp
            }
          }
          authorName{
            name
          }
          
          
        }
      }
    }
  }
  `}
  render= { 
    (data) => (

    <Fragment>

    <h1>{name}</h1>
    <p>Created on {date}</p>
    </Fragment>
  )}
 />
);

export default IndexPage
