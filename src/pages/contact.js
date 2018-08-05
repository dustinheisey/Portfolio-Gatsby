import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { Info, Grid } from '../components/Cards'

import Message from '../images/icon-messaging.svg'
import Email from '../images/icon-email.svg'
import Facebook from '../images/icon-facebook.svg'
import Twitter from '../images/icon-twitter.svg'
import Instagram from '../images/icon-instagram.svg'
import Github from '../images/icon-github.svg'
import LinkedIn from '../images/icon-linkedin.svg'
import Messenger from '../images/icon-messenger.svg'

const Contact = props => {
  return (
    <Layout>
      <main className="contact padding-lg">
        <Helmet
          title="Contact Us | Dallas Web Design"
          meta={[
            {
              name: 'description',
              content:
                "Contact Us Today! Fill out the included form and I'll reach out to you ASAP!"
            }
          ]}
        />
        <Info name="contact-text" classes="align-l justify-c height-p-lg">
          <h1 className="margin-b-sm">Connect With Me</h1>
          <div className="display-f justify-l align-c width-p-lg">
            <img
              src={Message}
              alt="Phone Number"
              className="margin-r-sm height-v-xsm"
            />
            <a
              href="tel:+4697189783"
              className="margin-sm color-d hover-color-m cursor-p"
            >
              (469) 718-9783
            </a>
          </div>
          <div className="display-f justify-l align-c width-p-lg">
            <img
              src={Email}
              alt="Email Address"
              className="margin-r-sm height-v-xsm"
            />
            <p className="margin-sm color-d">hello@dustinheisey.com</p>
          </div>
        </Info>

        <Grid name="contact-social">
          <a
            href="https://www.facebook.com/heisey.dustin"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={Facebook}
              alt="Facebook"
              className="grow border-r-xmd height-p-lg width-p-lg"
            />
          </a>
          <a
            href="https://twitter.com/dustin_heisey"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={Twitter}
              alt="Twitter"
              className="grow border-r-xmd height-p-lg width-p-lg"
            />
          </a>
          <a
            href="https://www.instagram.com/dustin_heisey/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={Instagram}
              alt="Instagram"
              className="grow border-r-xmd height-p-lg width-p-lg"
            />
          </a>
          <a
            href="https://github.com/dustinheisey"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={Github}
              alt="Github"
              className="grow border-r-xmd height-p-lg width-p-lg"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/heisey-dustin/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={LinkedIn}
              alt="LinkedIn"
              className="grow border-r-xmd height-p-lg width-p-lg"
            />
          </a>
          <a
            href="http://m.me/heisey.dustin"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={Messenger}
              alt="Messenger"
              className="grow border-r-xmd height-p-lg width-p-lg"
            />
          </a>
        </Grid>

        <Info name="contact-form">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="display-f direction-c align-l justify-sb margin-tb-md width-p-lg"
          >
            <div className="display-f direction-c justify-sa width-p-lg margin-b-md">
              <label htmlFor="name" className="margin-sm">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                className="border-r-sm bg-f width-p-lg"
              />
            </div>
            <div className="display-f direction-c justify-sa width-p-lg margin-b-md">
              <label htmlFor="email" className="margin-sm">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                className="border-r-sm bg-f width-p-lg"
              />
            </div>
            <div className="display-f direction-c justify-sa width-p-lg margin-b-md">
              <label htmlFor="message" className="margin-sm">
                <strong>
                  Message <span className="text-sm color-m">(Optional)</span>
                </strong>
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="border-r-sm bg-f width-p-lg"
              />
            </div>
            <button
              type="submit"
              className="border-r-md bg-p-d padding-lr-md padding-tb-sm d-padding-lr-md d-padding-tb-sm display-f align-c justify-l cursor-p grow outline-n border-n color-l"
            >
              <p className="color-l margin-z">Send</p>
            </button>
          </form>
        </Info>
      </main>
    </Layout>
  )
}

export default Contact
