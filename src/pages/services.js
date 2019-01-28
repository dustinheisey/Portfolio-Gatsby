import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

import Button from '../components/Button'

import Fast from '../images/icon-fast.svg'
import Responsive from '../images/icon-responsive.svg'
import User from '../images/icon-user.svg'

import Web from '../images/service-website.svg'
import PWA from '../images/service-pwa.svg'
import Optimization from '../images/service-Maintenance.svg'

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
          <h1 className="margin-b-md">Web Design Services that Deliver</h1>
          <p className="margin-b-md text-md color-m">
            I can help you with all stages of your web design and development.
            Check out my services below.
          </p>
        </Info>

        <section
          className={`border-r-lg bg-l shadow margin-tb-lg t-margin-n service service-right`}
        >
          <img
            src={Web}
            alt="Custom Web Design"
            className={`t-display-n service-image width-p-lg border-r-tl-lg border-r-tr-lg d-border-r-tl-lg d-border-r-tr-n d-border-r-bl-lg'`}
          />

          <div className="service-text width-p-lg padding-lg">
            <h2 className="text-lg margin-b-sm">Custom Web Design</h2>
            <p class="text-md margin-b-md">
              I start by giving you a set of questions to zero in on the details
              of your specific problems. I then brainstorm ways to solve these
              problems, while also thinking about how to help your users solve
              their own. Next, I make separate designs for different screen
              sizes and prototypes of the website that will implement my
              solutions, and develop your site, being sure to prioritize optimal
              coding practices to keep your site fast. Finally, I get your
              input, make some tweaks, and ship your site off so the world can
              enjoy it.
            </p>
            <h3 className="text-md margin-b-sm">Why this matters</h3>
            <p class="text-md">
              Throughout the entire process of designing and developing your
              site, I am thinking about your goals and your users goals. Every
              pixel on the finished website will come from a mission driven
              approach to web design. This is important because it means that,
              not only will you have a website that you think is beautiful, but
              you will also have a powerful tool to generate leads, sales,
              views, etc.
            </p>
          </div>
        </section>

        <section
          className={`border-r-lg bg-l shadow margin-tb-lg t-margin-n service service-left`}
        >
          <img
            src={PWA}
            alt="Progressive Web Apps"
            className={`t-display-n service-image width-p-lg border-r-tl-lg border-r-tr-lg d-border-r-tl-lg d-border-r-tr-n d-border-r-bl-lg'`}
          />

          <div className="service-text width-p-lg padding-lg">
            <h2 className="text-lg margin-b-md">Progressive Web Apps</h2>
            <p class="text-md margin-b-lg">
              If you've never heard of a progressive web app, thats
              understandable because its on the bleeding edge of web
              technologies. I can transform your website into an application
              that behaves almost exactly like a mobile app. I'll set you up
              with a custom app name and icon, and a custom loading screen your
              users will see when they open your app. They will be greeted by an
              app like mobile interface that's intuitive and custom made for
              mobile usage contexts. They will even be able to access your app
              without an internet connection and receive notifications from it.
            </p>
            <h3 className="text-xmd margin-b-md">Why this matters</h3>
            <p class="text-md">
              Progressive web apps are vital to increasing your app's usability
              on mobile. Considering that mobile web usage has eclipsed desktop
              usage some time ago, increasing your sites usability on mobile is
              essential to your business. It also can increase your search
              rankings over time by significant amounts, as google and other
              search engines are prioritizing usable websites over less usable
              ones.
            </p>
          </div>
        </section>

        <section
          className={`border-r-lg bg-l shadow margin-tb-lg t-margin-n service service-right`}
        >
          <img
            src={Optimization}
            alt="Maintenance & Optimization"
            className={`t-display-n service-image width-p-lg border-r-tl-lg border-r-tr-lg d-border-r-tl-lg d-border-r-tr-n d-border-r-bl-lg'`}
          />

          <div className="service-text width-p-lg padding-lg">
            <h2 className="text-lg margin-b-md">Maintenance & Optimization</h2>
            <p class="text-md margin-b-lg">
              It has become absolutely essential to keep your website updated
              and to have a redesign every few years as customer preferences
              change and your business grows. I can help with just that, by
              making sure that your website stays up to date and performing
              smoothly. I do this by refactoring your current codebase to be
              incredibly efficient, optimizing your images, styling and markup,
              as well as adding many background processes to monitor your site
              and keep it golden. I can also be your go to guy for maintenance
              and to answer any questions or problems you have.
            </p>
            <h3 className="text-xmd margin-b-md">Why this matters</h3>
            <p class="text-md">
              A website that is exceptional today becomes outdated in as little
              as a few months. Sites have a pervasive habit of slowing down over
              time and having someone on call to keep your website up to date
              and fast is essential in today's modern web based economy.
            </p>
          </div>
        </section>

        <Container name="services-grid">
          <Info classes="display-f direction-c align-c">
            <img
              src={Fast}
              alt="Blazing Fast"
              className="width-p-sm margin-b-md"
            />
            <h2 className="margin-b-md">Blazing Fast</h2>
            <p className="text-md margin-b-md color-m">
              Rest assured that speed will never be an issue with any project we
              work on together.
            </p>
          </Info>

          <Info classes="display-f direction-c align-c">
            <img
              src={Responsive}
              alt="Responsive"
              className="width-p-sm margin-b-md"
            />
            <h2 className="margin-b-md">Responsive</h2>
            <p className="text-md margin-b-md color-m">
              Don't worry, your site will look great on every device imaginable.
            </p>
          </Info>

          <Info classes="display-f direction-c align-c">
            <img
              src={User}
              alt="User Focussed"
              className="width-p-sm margin-b-md"
            />
            <h2 className="margin-b-md">User Focused</h2>
            <p className="text-md margin-b-md color-m">
              I can guarantee your users will love your site as much as you do.
            </p>
          </Info>
        </Container>

        <Info name="display-f direction-c align-c">
          <h2 className="margin-b-md">Quality First</h2>
          <p className=" text-md margin-b-md color-m">
            Every project is made with absolute attention to detail and genuine
            care for your success. Let's chat about how I can help you.
          </p>
          <Button
            text="See how I can help you"
            link="/contact"
            classes="width-v-xmd bg-p-d display-f justify-c"
          />
        </Info>
      </main>
    </Layout>
  )
}

export default Services
