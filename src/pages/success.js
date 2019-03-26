import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Button from '../components/Button'

const NotFoundPage = () => (
  <Layout>
    <Helmet
      title="Success! | Dustin Heisey"
      meta={[
        {
          name: 'description',
          content: "Thanks for reaching out! I'll be in touch ASAP!"
        }
      ]}
    />
    <section className="border-r-lg bg-l shadow margin-lg  display-f direction-c align-l justify-c padding-lg">
      <h1 className="margin-b-md">Success!</h1>
      <p className="margin-b-md color-m">
        Thanks for reaching out! I'll be in touch ASAP!
      </p>
      <Button link="/" text="Back Home" />
    </section>
  </Layout>
)

export default NotFoundPage
