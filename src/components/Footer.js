import React from 'react'
import { Link } from 'gatsby'
const Footer = props => {
  return (
    <footer className="bg-p-d padding-lg width-p-lg display-f direction-r justify-sa height-a">
      <div className="width-p-md display-f direction-c t-justify-se">
        <h3 className="color-l">About Me</h3>
        <p className="color-l margin-t-md">
          My name is Dustin Heisey. I'm a quality & affordable web designer
          located in Dallas, TX.
        </p>
        <Link to="/" className="color-l margin-tb-sm">
          &copy; 2018 Dustin Heisey
        </Link>
      </div>
      <div className="height-p-lg display-f direction-c t-align-l">
        <h3 className="color-l">Sitemap</h3>
        <nav>
          <ul className="display-f justify-se direction-c t-direction-r margin-t-md">
            <div className="direction-c">
              <FooterLink link="/" text="Home" />
              <FooterLink link="/about" text="About" />
              <FooterLink link="/benefits" text="Benefits" />
            </div>
            <div className="direction-c">
              <FooterLink link="/services" text="Services" />
              <FooterLink link="/portfolio" text="Portfolio" />
              <FooterLink link="/contact" text="Contact" />
            </div>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

const FooterLink = ({ link, text }) => {
  return (
    <li className="margin-tb-sm">
      <Link to={link} className="background color-l padding-sm">
        {text}
      </Link>
    </li>
  )
}

export default Footer
