import React from 'react'
import { Link } from 'gatsby'

const Button = ({ link, text }) => {
  return (
    <Link to={link}>
      <button className="border-r-md bg-p-d padding-lr-md padding-tb-sm d-padding-lr-md d-padding-tb-sm display-f align-c justify-l cursor-p grow outline-n border-n color-l cursor-p text-md">
        {text}
      </button>
    </Link>
  )
}

export default Button
