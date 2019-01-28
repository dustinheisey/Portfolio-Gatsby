import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

const Aerials = props => {
  return (
    <Layout>
      <main className="about padding-lg">
        <Helmet
          title="Aerials Gymnastics | Case Study"
          meta={[
            {
              name: 'description',
              content:
                'Most web designers give the bare minimum and charge way too much. I am one of few Dallas Web Designers who create compelling, yet affordable web designs.'
            }
          ]}
        />
      </main>
    </Layout>
  )
}

export default Aerials

