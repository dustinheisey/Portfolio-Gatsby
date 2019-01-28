import React from 'react'
import { Link } from 'gatsby'

const Button = ({ external, link, text, classes }) => {
  if (external) {
    return (
      <a className={`border-r-md padding-lr-md padding-tb-sm d-padding-lr-md d-padding-tb-sm display-i align-c justify-l cursor-p grow outline-n border-n color-l cursor-p text-md ${
        classes !== undefined ? classes : 'bg-p-d'
      }`} 
      href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    )
  } else {
    return (
      <Link to={link}>
        <button
          className={`border-r-md padding-lr-md padding-tb-sm d-padding-lr-md d-padding-tb-sm display-f align-c justify-l cursor-p grow outline-n border-n color-l cursor-p text-md ${
            classes !== undefined ? classes : 'bg-p-d'
          }`}
        >
          {text}
        </button>
      </Link>
    )
  }
}

export default Button
