import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

import Button from '../components/Button'
import { Info } from '../components/Cards'

const Benefits = props => {
  return (
    <Layout>
      <main className='benefits padding-lg'>
        <Helmet
          title='Website Ownership | Benefits Of Owning A Website | Dustin Heisey'
          meta={[
            {
              name: 'description',
              content:
                'Wondering why every sucessful business has a website in 2018? Learn the benefits of website ownership, and why you need one today!'
            }
          ]}
        />
        <Info name='benefits-intro'>
          <h1 className='margin-b-md'>
            Benefits of Owning a Website
          </h1>
          <p className='margin-b-md color-m'>
            There are many benefits to owning your own
            website, and every day their number and
            importance increases. Check out some of the
            benefits below.
          </p>
        </Info>

        <Info name='benefits-demand'>
          <h2 className='margin-b-md'>
            Expands Demand For Your Product or Service
          </h2>
          <p className='margin-b-md color-m'>
            By owning a website, you expand your reach from
            your local area to potentially the entire world.
            It doesn't matter how amazing your product or
            service is if nobody knows about it. Owning a
            website makes many more people aware of your
            wonderful company.
          </p>
        </Info>

        <Info name='benefits-questions'>
          <h2 className='margin-b-md'>
            Gives Users Answers Immediately
          </h2>
          <p className='margin-b-md color-m'>
            Customers prefer to have their questions
            answered as soon as possible. With a website you
            can direct them to those answers immediately
            instead of having to answer the same questions
            over and over again.
          </p>
        </Info>

        <Info name='benefits-competitors'>
          <h2 className='margin-b-md'>
            Gives You an Advantage Over Your Competitors
          </h2>
          <p className='margin-b-md color-m'>
            In 2018 it has become a standard for companies
            of all industries to have their own website. If
            you don't follow this trend, your competitors
            will. Attract your customers by getting a
            website before your competitors do.
          </p>
        </Info>

        <Info name='benefits-contact'>
          <h2 className='margin-b-md'>And Many More</h2>
          <p className='margin-b-md color-m'>
            There are so many benefits to owning your own
            website. Contact me and I can tell you a little
            more about them.
          </p>
          <Button text='Connect With Me' link='/contact' />
        </Info>
      </main>
    </Layout>
  )
}

export default Benefits
