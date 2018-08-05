import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

import Button from '../components/Button'
import { Container, Info } from '../components/Cards'

const Services = props => {
  return (
    <Layout>
      <main className="services padding-lg">
        <Helmet
          title="Custom Web Design | Ecommerce | Personal Blog | PWA"
          meta={[
            {
              name: 'description',
              content:
                'I can help you at every stage of your web design and development. Whether you need a refresh of your website or a completely new one, I have you covered!'
            }
          ]}
        />
        <Info>
          <h1 className="margin-b-md">Custom Web Design to Fit Your Needs</h1>
          <p className="margin-b-md color-m">
            I can help you with all stages of your web design and development.
            Check out my services below.
          </p>
        </Info>

        <Container name="services-grid">
          <Info>
            <h2 className="margin-b-md">Website Design</h2>
            <p className="margin-b-md color-m">
              Let me design a purposeful, converting website mockup for all
              screen sizes.
            </p>
          </Info>

          <Info>
            <h2 className="margin-b-md">Blogging</h2>
            <p className="margin-b-md color-m">
              I can develop your blog in your favorite CMS or help you find the
              one that is best for your specific situation.
            </p>
          </Info>

          <Info>
            <h2 className="margin-b-md">Custom Projects</h2>
            <p className="margin-b-md color-m">
              Give me your idea and I'll help it become a reality.
            </p>
          </Info>

          <Info>
            <h2 className="margin-b-md">Ecommerce</h2>
            <p className="margin-b-md color-m">
              Sell your products and services online and see unbelievable growth
              in your business.
            </p>
          </Info>

          <Info>
            <h2 className="margin-b-md">Web Design Refresh & Maintanence</h2>
            <p className="margin-b-md color-m">
              I can keep your website up to date, speedy, and relevant.
            </p>
          </Info>

          <Info>
            <h2 className="margin-b-md">Progressive Web Apps</h2>
            <p className="margin-b-md color-m">
              Convert your website to a strikingly close to native web
              application.
            </p>
          </Info>
        </Container>

        <Info>
          <h2 className="margin-b-md">Quality First</h2>
          <p className="margin-b-md color-m">
            Every project is made with absolute attention to detail and genuine
            care for your success. Learn more about my process.
          </p>
          <Button text="About Me" link="/about" />
        </Info>
      </main>
    </Layout>
  )
}

export default Services
