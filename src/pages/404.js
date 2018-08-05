import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { Info } from '../components/Cards'
import Button from '../components/Button'

const NotFoundPage = () => (
  <Layout>
    <Helmet
      title="Page Not Found | Dallas Web Design"
      meta={[
        {
          name: 'description',
          content: "You just hit a route that doesn't exist... the sadness."
        }
      ]}
    />
    <Info name="landing-services">
      <h1 className="margin-b-md">Page Not Found</h1>
      <p className="margin-b-md color-m">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <Button link="/" text="Back Home" />
    </Info>
  </Layout>
)

export default NotFoundPage
