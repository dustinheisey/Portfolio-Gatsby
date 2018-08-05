import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

import Button from '../components/Button'
import { Info, Image } from '../components/Cards'

import Benefits from '../images/web-design-benefits.jpg'
import Team from '../images/team.jpg'
import Aerials from '../images/aerials.jpg'
import Responsive from '../images/mobile-first-design.svg'
import Purposeful from '../images/purposeful-design.svg'
import Secure from '../images/site-security.svg'
import Optimized from '../images/website-optimization.svg'

const Index = props => (
  <Layout>
    <main className="landing padding-lg">
      <Helmet
        title="Dallas Web Design & Web Development | Quality Website Design"
        meta={[
          {
            name: 'description',
            content:
              'Hey, my name is Dustin Heisey. Located in Dallas TX, I focus on real solutions to business problems by creating quality & affordable web designs.'
          }
        ]}
      />
      <Info name="landing-services">
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
        <h2 className="margin-b-md">Check Out My Recent Work</h2>
        <a href="https://www.my-teamgear.com" rel="nofollow">
          <div>
            <img
              src={Team}
              alt="MY Team Gear"
              className="width-p-lg height-a"
            />
            <h3 className="margin-b-md">MY Team Gear</h3>
            <p className="margin-b-md color-m">
              Custom team gear for every sport and fan imaginable.
            </p>
          </div>
        </a>
        <a href="http://www.aerialsgymnastics.net" rel="nofollow">
          <div>
            <img
              src={Aerials}
              alt="Aerials Gymnastics"
              className="width-p-lg height-a"
            />
            <h3 className="margin-b-md">Aerials</h3>
            <p className="margin-b-md color-m">
              Join a high performing gymnastics gym that treats its students
              like family.
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
      </Info>
    </main>
  </Layout>
)

export default Index
