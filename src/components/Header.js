import React, { Component } from 'react'
import Navigation from '../components/Navigation'

import Logo from '../images/dustin-heisey-logo.svg'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuVisible: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.state.menuVisible
      ? this.setState({ menuVisible: false })
      : this.setState({ menuVisible: true })
  }

  render() {
    return (
      <header className="padding-t-lg padding-lr-lg">
        <nav className="display-f direction-c justify-c align-sb bg-l border-r-lg shadow position-r index-t">
          <div className="display-f justify-sa t-justify-sb padding-tb-lg padding-lr-md t-padding-tb-md t-padding-lr-lg align-c bg-l index-t border-r-lg">
            <a href="/" className="width-p-xmd t-width-p-md display-f align-c">
              <img
                src={Logo}
                alt="Dustin Heisey Web Design"
                className="width-p-lg height-a margin-z"
              />
            </a>
            <div
              className="bg-p-d border-r-md display-f direction-c justify-c self-c align-c width-v-sm t-width-u height-v-sm t-height-u cursor-p icon grow"
              onClick={this.handleClick}
            >
              <span
                onClick={this.handleClick}
                className={`hamburger ${this.state.menuVisible &&
                  'hamburger-active'}`}
              />
            </div>
          </div>
          <Navigation
            menuVisible={this.state.menuVisible}
            handleClick={this.handleClick}
          />
        </nav>
      </header>
    )
  }
}

export default Header
