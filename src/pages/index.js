import React, {Fragment} from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'


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
    (
      {
    allContentfulBlogPost: {
      title,
      date
      
    }

  }) => (

    <Fragment>

    <h1>{title}</h1>
    <small>Created on {date}</small>
    </Fragment>
  )}
 />
);

export default IndexPage
