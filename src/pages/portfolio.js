import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { Info, Project } from '../components/Cards'
import Button from '../components/Button'

import Aerials from '../images/works-aerials.jpg'
import Honey from '../images/works-hoover-honey.png'

const Portfolio = props => {
  return (
    <Layout>
      <main className='works padding-lg'>
        <Helmet
          title=' Recent Web Designs | Web Designer Portfolio | Dustin Heisey'
          meta={[
            {
              name: 'description',
              content:
                "Here you'll find the most recent web designs I've made. The list often changes so check back often!"
            }
          ]}
        />
        <Info>
          <h1 className='margin-b-sm'>Check Out My Work</h1>
          <p className='text-md color-m'>
            Here are some of my recent projects. Take a
            look.
          </p>
        </Info>
        <Project
          img={Honey}
          title='Hoover Honey'
          text='Enjoy the taste and benefits of real honey sold by real people.'
          textColor='gradient-text-honey'
          btnColor='gradient-honey'
          btnText='View Website'
          btnLink='http://hooverhoney.com'
          external
          orientation={1}
        />
        <Project
          img={Aerials}
          title='Aerials Gymnastics'
          text='Join a high performing gymnastics gym that treats its students
                like family.'
          textColor='gradient-text-aerials'
          btnColor='gradient-aerials'
          btnText='View Website'
          btnLink='http://www.aerialsgymnastics.net'
          external
          orientation={0}
        />

        <Info name='display-f direction-c align-c'>
          <h2 className='margin-b-sm'>
            Let figure out how I can help you next
          </h2>
          <p className='margin-b-sm text-md'>
            Contact me today and I'll design a custom
            solution for your problems
          </p>
          <Button
            text='Hear my ideas'
            link='/contact'
            classes='width-v-xmd bg-p-d display-f justify-c'
          />
        </Info>

        {/* <Container name="works-grid">
          <Link
            link="http://www.aerialsgymnastics.net"
            rel="nofollow"
            target="_blank"
            classes="height-p-lg"
          >
            <img
              src={Aerials}
              alt="Aerials Gymnastics"
              className="border-r-tl-lg border-r-tr-lg width-p-lg height-a"
            />
            <div className="padding-md height-p-xmd">
              <h2 className="margin-b-md text-xmd">Aerials Gymnastics</h2>
              <p className="margin-b-md text-md">
                Join a high performing gymnastics gym that treats its students
                like family.
              </p>
            </div>
          </Link>

          <Link
            link="https://geomancy.getdallaswebdesign.com"
            rel="nofollow"
            target="_blank"
            classes="height-p-lg"
          >
            <img
              src={Geomancy}
              alt="Geomancy"
              className="border-r-tl-lg border-r-tr-lg width-p-lg height-a"
            />
            <div className="padding-md height-p-xmd">
              <h2 className="margin-b-md text-xmd">Geomancy</h2>
              <p className="margin-b-md text-md">
                Can you tap your way to the final shape?
              </p>
            </div>
          </Link>

          <Link
            link="https://www.snake.getdallaswebdesign.com/"
            rel="nofollow"
            target="_blank"
            classes="height-p-lg"
          >
            <img
              src={Snake}
              alt="Snake"
              className="border-r-tl-lg border-r-tr-lg width-p-lg height-a"
            />
            <div className="padding-md height-p-xmd">
              <h2 className="margin-b-md text-xmd">Snake</h2>
              <p className="margin-b-md text-md">
                Play a nostalgic game with a minimal aesthetic.
              </p>
            </div>
          </Link>
        </Container> */}
      </main>
    </Layout>
  )
}

export default Portfolio
