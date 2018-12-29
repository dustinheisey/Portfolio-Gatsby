import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { Container, Info, Link } from '../components/Cards'

import Team from '../images/works-team.jpg'
import Aerials from '../images/works-aerials.jpg'
import Geomancy from '../images/works-geomancy.jpg'
import Snake from '../images/works-snake.jpg'

const Portfolio = props => {
  return (
    <Layout>
      <main className="works padding-lg">
        <Helmet
          title=" Recent Web Designs | Web Designer Portfolio | Dallas Web Design"
          meta={[
            {
              name: 'description',
              content:
                "Here you'll find the most recent web designs I've made. The list often changes so check back often!"
            }
          ]}
        />
        <Info>
          <h1 className="margin-b-md">Recent Web Design Work</h1>
          <p className="margin-b-md color-m">
            Here are some of my recent projects. Work with me and I'll add yours
            to the list!
          </p>
        </Info>

        <Container name="works-grid">
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
        </Container>
      </main>
    </Layout>
  )
}

export default Portfolio
