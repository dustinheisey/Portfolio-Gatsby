import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

import Button from '../components/Button'
import { Info } from '../components/Cards'

const Index = props => (
  <Layout>
    <main className='landing padding-lg'>
      <Helmet
        title='User Experience Design, Web Design & Development | Dustin Heisey'
        meta={[
          {
            name: 'description',
            content:
              'Hey, my name is Dustin Heisey. Located in Dallas TX, I focus on real solutions to business problems by creating quality & affordable web designs.'
          }
        ]}
      />
      {/* <Info name="landing-services">
        <h1 className="margin-b-md">
          Quality Web Designer Located in Dallas, TX
        </h1>
        <p className="margin-b-md color-m">
          Let me design and build you a highly converting, mobile first, secure
          and optimized website today.
        </p>
        <Button link="/services" text="Check Out My Services" />
      </Info>

      <Image name="landing-benefits">
        <img
          src={Benefits}
          alt="Benefits of getting an online presence"
          className="border-r-tl-lg border-r-tr-lg width-p-lg height-a"
        />
        <div className="padding-md height-p-xmd">
          <h2 className="margin-b-md">Why Online?</h2>
          <p className="margin-b-md">
            Find out why you can't succeed without an online presence in 2018.
          </p>
          <Button text="Explore The Benefits" link="/benefits" />
        </div>
      </Image>

      <Info name="landing-about">
        <h2 className="margin-b-lg">You Need More Than Just a Website</h2>
        <div className="display-f align-c justify-l width-p-lg">
          <div className="height-vh-sm width-vh-sm border-r-lg display-f align-c justify-c margin-r-lg">
            <img
              src={Responsive}
              alt="Mobile First"
              className="height-p-xmd t-height-p-lg"
            />
          </div>
          <div className="display-f direction-c align-l justify-se">
            <h3>Mobile First and Responsive</h3>
            <p className="color-m">
              Make users love your site on all screen sizes.
            </p>
          </div>
        </div>
        <div className="display-f align-c justify-l width-p-lg">
          <div className="height-vh-sm width-vh-sm border-r-lg display-f align-c justify-c margin-r-lg">
            <img
              src={Purposeful}
              alt="Purposeful Design"
              className="height-p-xmd t-height-p-lg"
            />
          </div>
          <div className="display-f direction-c align-l justify-se">
            <h3>Purposeful Web Design</h3>
            <p className="color-m">Design your website thoughtfully.</p>
          </div>
        </div>
        <div className="display-f align-c justify-l width-p-lg">
          <div className="height-vh-sm width-vh-sm border-r-lg display-f align-c justify-c margin-r-lg">
            <img
              src={Secure}
              alt="Security"
              className="height-p-xmd t-height-p-lg"
            />
          </div>
          <div className="display-f direction-c align-l justify-se">
            <h3>Secure Encryption</h3>
            <p className="color-m">Keep your data safe.</p>
          </div>
        </div>
        <div className="display-f align-c justify-l width-p-lg">
          <div className="height-vh-sm width-vh-sm border-r-lg display-f align-c justify-c margin-r-lg">
            <img
              src={Optimized}
              alt="Optimization"
              className="height-p-xmd t-height-p-lg"
            />
          </div>
          <div className="display-f direction-c align-l justify-se">
            <h3>Optimized Websites</h3>
            <p className="color-m">
              Use new technology for blazing fast speeds.
            </p>
          </div>
        </div>
        <h4 className="margin-tb-lg">
          <strong>
            Learn how I'm different from your average Web Designer.
          </strong>
        </h4>
        <Button text="Discover My Process" link="/about" />
      </Info>

      <Info name="landing-works">
        <a href="http://www.aerialsgymnastics.net" rel="nofollow">
          <div>
            <img
              src={Aerials}
              alt="Aerials Gymnastics"
              className="width-p-lg height-a border-r-md"
            />
            <h3 className="margin-b-md">Aerials Gymnastics</h3>
            <p className="margin-b-md color-m">
              Join a high performing gymnastics gym that treats its students
              like family.
            </p>
          </div>
        </a>
        <a href="https://www.snake.getdallaswebdesign.com" rel="nofollow">
          <div>
            <img
              src={Snake}
              alt="Snake"
              className="width-p-lg height-a border-r-md"
            />
            <h3 className="margin-b-md">Snake</h3>
            <p className="margin-b-md color-m">
              Play a nostalgic game with a minimal aesthetic.
            </p>
          </div>
        </a>
        <Button text="See My Portfolio" link="/portfolio" />
      </Info>

      <Info name="landing-contact">
        <h2 className="margin-b-md">Invest in Your Business Today!</h2>
        <p className="margin-b-md color-m">
          Let's make your custom web design today. Send me some information and
          I'll get in touch ASAP!
        </p>
        <Button text="Let's Connect" link="/contact" />
      </Info> */}

      <Info name='landing-header bg-p-d display-f direction-c align-c'>
        <h1 className='color-l'>
          Website Not generating results?
        </h1>
        <p className='color-l text-md'>
          Don't worry, let me tell you how you can change
          that.
        </p>
      </Info>
      <Info name='landing-cost display-f direction-c align-l'>
        <h2>Your website may be outdated</h2>
        <p className='text-md'>
          An outdated website could be costing you thousands
          every month
        </p>
      </Info>
      <Info name='landing-changes display-f direction-c align-c'>
        <h2>
          Some key changes can have incredible benefits
        </h2>
        <p className='text-md'>
          Designing with purpose and looking out for your
          users can pay off so significantly
        </p>
      </Info>

      {/* https://www.statista.com/statistics/284202/mobile-phone-internet-user-penetration-worldwide/ */}
      <Info name='landing-pwa display-f direction-c align-c'>
        <h2>Mobile First</h2>
        <p className='text-md'>
          63% of users access the web through their phones.
          By making mobile a priority rather than an
          afterthought, you can increase your sites usage
          considerably. More usage means more conversions
          which means more profit.
        </p>
      </Info>
      <Info name='landing-speed display-f direction-c align-c'>
        <h2>Speed</h2>
        <p className='text-md'>
          Increasing your page speed by only 1 second can
          increase your conversions by 3%. When each new
          client or sale generates thousands of dollars, or
          when your user base is very large, 3% is a very
          big deal.
        </p>
      </Info>
      <Info name='landing-usability display-f direction-c align-c'>
        <h2>Usability</h2>
        <p className='text-md'>
          The web has become a saturated landscape. The key
          characteristic that sepperates the sites that are
          successful from those that aren't is usability.
          When your users enjoy using your website, they are
          more likely to use it, and more likely to respond
          favorably to your requests
        </p>
      </Info>
      <Info name='landing-me bg-p-d padding-lg'>
        <h2 className='color-l'>My Web Design works</h2>
        <p className='color-l text-md'>
          I design in such a way that puts users first, so
          that I can help businesses like yours sell more
          and make more. I focus on aesthetic design that
          serves a clear purpose, helps users achieve their
          goals easily, and gets them to a conversion in the
          least steps possible. If that sounds like
          something you are interested in, I'd be happy to
          tell you more.
        </p>
      </Info>
      <Info name='landing-testimonial'>
        <p className='text-md'>
          “You've completely changed my business! You've
          eliminated paper from my company and given us
          countless hours to help our students and their
          families. Thank you so much! - Marsha Mayo
        </p>
      </Info>
      <Info name='landing-contact display-f direction-c align-c'>
        <h2 className='margin-b-sm'>
          Ready to make more money?
        </h2>
        <p className='margin-b-sm text-md'>
          Send me a message we can get started right away :)
        </p>
        <Button
          text="Let's have a chat"
          link='/contact'
          classes='width-v-xmd bg-p-d display-f justify-c'
        />
      </Info>
    </main>
  </Layout>
)

export default Index
