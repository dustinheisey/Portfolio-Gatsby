import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { Info, Form } from '../components/Cards'

import Message from '../images/icon-messaging.svg'
import Email from '../images/icon-email.svg'
import Github from '../images/icon-github.svg'
import LinkedIn from '../images/icon-linkedin.svg'

const Contact = props => {
  return (
    <Layout>
      <main className="contact padding-lg">
        <Helmet
          title="Contact Us | Dustin Heisey"
          meta={[
            {
              name: 'description',
              content:
                "Contact Us Today! Fill out the included form and I'll reach out to you ASAP!"
            }
          ]}
        />
        <Info name="contact-text">
          <h2>Get in Touch</h2>
          <p className="text-sm">
            Ready to move forward? Not sure and have some questions? Send me a
            message and prefered method of contact. I'll reach out ASAP to help!
          </p>
        </Info>

        <Info name="contact-social" classes="align-l justify-c height-p-lg">
          {/* <h1 className="margin-b-sm">Connect With Me</h1> */}
          <div className="display-f">
            <img
              src={Github}
              alt="Github"
              className="margin-r-sm height-v-xsm"
            />
            <a
              href="https://github.com/dustinheisey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md margin-sm color-d hover-color-m cursor-p"
            >
              Github
            </a>
          </div>

          <div className="display-f">
            <img
              src={LinkedIn}
              alt="LinkedIn"
              className="margin-r-sm height-v-xsm"
            />
            <a
              href="https://www.linkedin.com/in/heisey-dustin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md margin-sm color-d hover-color-m cursor-p"
            >
              LinkedIn
            </a>
          </div>
          <div className="display-f justify-l align-c">
            <img
              src={Message}
              alt="Phone Number"
              className="margin-r-sm height-v-xsm"
            />
            <a
              href="tel:+4697189783"
              className="text-md margin-sm color-d hover-color-m cursor-p"
            >
              (352) 459-8464
            </a>
          </div>

          <div className="display-f justify-l align-c">
            <img
              src={Email}
              alt="Email Address"
              className="margin-r-sm height-v-xsm"
            />
            <a
              href="mailto:hello@dustinheisey.com"
              className="text-md margin-sm color-d"
            >
              hello@dustinheisey.com
            </a>
          </div>
        </Info>

        <Form name="contact-form" className="padding-sm">
          <form
            name="contact"
            method="POST"
            action="/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="display-f direction-c align-l justify-sb margin-tb-md width-p-lg"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <div className="display-f direction-c justify-sa width-p-lg margin-b-sm">
              <label htmlFor="name" className="text-sm margin-tb-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                autoComplete="name"
                className="border-r-sm bg-f width-p-lg"
              />
            </div>
            <div className="display-f direction-c justify-sa width-p-lg margin-b-sm">
              <label htmlFor="email" className="text-sm margin-tb-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                className="border-r-sm bg-f width-p-lg"
              />
            </div>
            <div className="display-f direction-c justify-sa width-p-lg margin-b-sm">
              <label htmlFor="email" className="text-sm margin-tb-sm">
                Phone - <em>Optional</em>
              </label>
              <input
                type="phone"
                name="phone"
                autoComplete="tel"
                className="border-r-sm bg-f width-p-lg"
              />
            </div>
            <div className="display-f direction-c justify-sa width-p-lg margin-b-sm">
              <label htmlFor="message" className="text-sm margin-tb-sm">
                Message
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
              className="border-r-md bg-p-d padding-lr-md padding-tb-sm d-padding-lr-md d-padding-tb-sm display-f align-c justify-l cursor-p grow outline-n border-n color-l margin-tb-sm"
            >
              <p className="color-l margin-z">Send</p>
            </button>
          </form>
        </Form>
      </main>
    </Layout>
  )
}

export default Contact
