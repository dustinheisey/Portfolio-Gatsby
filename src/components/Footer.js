import React from 'react'
import { Link } from 'gatsby'
const Footer = props => {
  return (
    <footer className='bg-p-d padding-lg width-p-lg display-f direction-r justify-sa height-a'>
      <div className='width-p-md display-f direction-c t-justify-se'>
        <h3 className='color-l'>About Me</h3>
        <p className='color-l margin-t-md text-md'>
          My name is Dustin Heisey. I'm a web and user
          experience designer located in Dallas, TX. I help
          you make more money by creating an online presence
          that your users want to use.
        </p>
        <Link
          to='/'
          className='color-l text-md margin-tb-sm'
        >
          &copy; 2019 Dustin Heisey
        </Link>
      </div>
      <div className='height-p-lg display-f direction-c t-align-l'>
        <h3 className='color-l'>Sitemap</h3>
        <nav>
          <ul className='display-f justify-se direction-c t-direction-r margin-t-md'>
            <div className='direction-c'>
              <FooterLink link='/' text='Home' />
              <FooterLink link='/about' text='About' />
              <FooterLink
                link='/services'
                text='Services'
              />
            </div>
            <div className='direction-c'>
              <FooterLink
                link='/portfolio'
                text='Portfolio'
              />
              <FooterLink link='/contact' text='Contact' />
            </div>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

const FooterLink = ({ link, text }) => {
  return (
    <li className='margin-tb-sm'>
      <Link
        to={link}
        className='background color-l text-md padding-sm'
      >
        {text}
      </Link>
    </li>
  )
}

export default Footer
