import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'
import '../scss/style.scss'
import Apple from '../images/apple-touch-icon.png'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <html lang="en" />
          <link rel="apple-touch-icon" sizes="180x180" href={Apple} />
        </Helmet>
        <Header />
        {children}
        <Footer />
        <script type="text/javascript">
          var subscribersSiteId = 'a3bcf1f5-7cd1-4f06-a69b-6a1d371e5b50';
        </script>
        <script type="text/javascript" src="https://cdn.subscribers.com/assets/subscribers.js"></script>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
