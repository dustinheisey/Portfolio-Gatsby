import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Button from '../components/Button'

const NotFoundPage = () => (
  <Layout>
    <Helmet
      title="Page Not Found | Dustin Heisey"
      meta={[
        {
          name: 'description',
          content: "You just hit a route that doesn't exist... the sadness."
        }
      ]}
    />
    <section className="border-r-lg bg-l shadow margin-lg  display-f direction-c align-l justify-c padding-lg">
      <h1 className="margin-b-md">Page Not Found</h1>
      <p className="margin-b-md color-m">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <Button link="/" text="Back Home" />
    </section>
  </Layout>
)

export default NotFoundPage
