import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

import Button from '../components/Button'
import { Info, Interval } from '../components/Cards'


const About = props => {
  return (
    <Layout>
      <main className="about padding-lg">
        <Helmet
          title="Quality Web Design | What Makes Me Different | Dallas Web Design"
          meta={[
            {
              name: 'description',
              content:
                'Most web designers give the bare minimum and charge way too much. I am one of few Dallas Web Designers who create compelling, yet affordable web designs.'
            }
          ]}
        />

        <Interval text="I'm a Freelance Web Designer and Developer, located in Dallas, Texas. I give my clients immense value when they choose to work with me. I save them time and money, and I help their business reach their potential. There are countless web designers in the Dallas/Fort Worth area, but there are few that will give great care in helping you succeed while also not demanding an arm and a leg. I am one of those few." />

        <Info name="about-instructions">
          <h1 className="margin-b-md">
            I'm Different From Other Web Designers
          </h1>
          <p className="margin-b-md color-m">
            You can choose to work with many designers and developers, but most
            of them don't follow best practices and create a bare minimum
            solution to your problems. Find out how I am different below.
          </p>
        </Info>

        <Info name="about-mobile">
          <h2 className="margin-b-md">I Develop My Projects Mobile First</h2>
          <p className="margin-b-md color-m">
            Some time ago, more people begain accessing the web on their mobile
            devices than on their desktops. I adopt the highly converting
            practice of developing for mobile and then editing as more space
            becomes available. This makes for a beautiful mobile and desktop
            experience for all of your users.
          </p>
        </Info>

        <Info name="about-purpose">
          <h2 className="margin-b-md">I Design Every Website With Purpose</h2>
          <p className="margin-b-md color-m">
            I start every project by asing my clients what the end goal of their
            website is. Is it to get a sale? To get some contact info? To give
            users information? Whatever the purpose, I make sure that every
            design choice helps you achieve that goal.
          </p>
        </Info>

        <Info name="about-security">
          <h2 className="margin-b-md">I Keep Your Data Safe</h2>
          <p className="margin-b-md color-m">
            It's no longer safe to have data on the web without some safeguards
            to protect it. All of the projects I complete utilize strong
            security protocols to protect you and your customers from data
            theft.
          </p>
        </Info>

        <Info name="about-reason-optimize">
          <h2 className="margin-b-md">I Optimize Every Project</h2>
          <p className="margin-b-md color-m">
            Site speed has always been important, but recently it has become a
            necessity. I utilize the best coding practices to keep your site
            fast and compliant with every web standard.
          </p>
        </Info>

        <Info name="about-reason-care">
          <h2 className="margin-b-md">I Treat Every Website like My Own</h2>
          <p className="margin-b-md color-m">
            I put the same time and effort as I do to design my own websites on
            every project I complete. That means you get the best service
            possible, and it also means you get great support for any problems
            you have.
          </p>
        </Info>

        <Info name="about-contact">
          <h2 className="margin-b-md">Interested in Learning More?</h2>
          <p className="margin-b-md color-m">
            Connect with me and I'll help you succeed, guaranteed.
          </p>
          <Button text="Contact Me" link="/contact" />
        </Info>
      </main>
    </Layout>
  )
}

export default About
