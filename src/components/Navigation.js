import React from 'react'
import { Link } from 'gatsby'

const Navigation = ({ menuVisible, handleClick }) => (
  <ul
    className={`bg-p-d direction-c align-l justify-c height-a border-r-bl-lg border-r-br-lg margin-z padding-lg display-f navigation index-b ${
      menuVisible ? 'open' : 'close'
    }`}
  >
    <NavigationLink
      link='/'
      text='Home'
      handleClick={handleClick}
      first
    />
    <NavigationLink
      link='/about'
      text='About'
      handleClick={handleClick}
    />
    <NavigationLink
      link='/services'
      text='Services'
      handleClick={handleClick}
    />
    <NavigationLink
      link='/portfolio'
      text='Portfolio'
      handleClick={handleClick}
    />
    <NavigationLink
      link='/contact'
      text='Contact'
      handleClick={handleClick}
      last
    />
  </ul>
)

const NavigationLink = ({
  link,
  text,
  first,
  last,
  handleClick
}) => {
  return (
    <li
      className={`${first && 'margin-t-md'} ${!last &&
        'margin-b-lg'}`}
    >
      <Link
        to={link}
        className='color-l text-lg padding-sm background'
        onClick={handleClick}
      >
        {text}
      </Link>
    </li>
  )
}

export default Navigation
