import React from 'react'
import Avatar from '../images/dustin-heisey.svg'

const Container = ({ name, classes, children }) => {
  return (
    <section
      className={`${name !== undefined ? name : ''} ${
        classes !== undefined ? classes : ''
      }`}
    >
      {children}
    </section>
  )
}
const Info = ({ name, classes, children }) => {
  return (
    <section
      className={`border-r-lg bg-l shadow margin-tb-lg t-margin-n display-f direction-c align-l justify-c padding-lg ${
        name !== undefined ? name : ''
      } ${classes !== undefined ? classes : ''}`}
    >
      {children}
    </section>
  )
}

const Link = ({ name, classes, children, link }) => {
  return (
    <a href={link}>
      <section
        className={`border-r-lg bg-l shadow margin-tb-lg t-margin-n display-f direction-c align-l justify-c grow ${
          name !== undefined ? name : ''
        } ${classes !== undefined ? classes : ''}`}
      >
        {children}
      </section>
    </a>
  )
}

const Image = ({ name, classes, children }) => {
  return (
    <section
      className={`border-r-lg bg-l shadow margin-tb-lg t-margin-n display-f direction-c align-l justify-c ${
        name !== undefined ? name : ''
      } ${classes !== undefined ? classes : ''}`}
    >
      {children}
    </section>
  )
}

const Grid = ({ name, classes, children }) => {
  return (
    <section
      className={`border-r-lg bg-l shadow margin-tb-lg t-margin-n padding-lg ${
        name !== undefined ? name : ''
      } ${classes !== undefined ? classes : ''}`}
    >
      {children}
    </section>
  )
}

class Interval extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subtitle: 1,
      subtitleText: 'I design mobile first websites.',
    }

    this.onInterval = this.onInterval.bind(this)
  }

  componentDidMount() {
    let interval = setInterval(this.onInterval, 3000)
    this.setState({ interval: interval })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  onInterval() {
    switch (this.state.subtitle) {
      case 1:
        this.setState({
          subtitle: 2,
          subtitileText: 'I develop attractive user experiences.',
        })
        break
      case 2:
        this.setState({
          subtitle: 3,
          subtitleText: 'I keep user and client data safe.',
        })
        break
      case 3:
        this.setState({
          subtitle: 4,
          subtitleText: 'I optimize everything.',
        })
        break
      case 4:
        this.setState({
          subtitle: 5,
          subtitleText: 'I create native-like web designs.',
        })
        break
      case 5:
        this.setState({
          subtitle: 1,
          subtitileText: 'I design mobile first websites.',
        })
        break
      default:
        break
    }
  }

  render() {
    return (
      <section className="border-r-lg bg-l shadow margin-tb-lg t-margin-n display-f direction-c align-c about-image">
        <img
          src={Avatar}
          alt="About Me"
          className="width-p-lg height-a border-r-tl-lg border-r-tr-lg"
        />
        <div className="padding-lg">
          <h2 className="margin-b-lg">Hey, My Name is Dustin Heisey</h2>
          <h3 className="margin-b-lg text-xmd color-d">
            {this.state.subtitleText}
          </h3>
          <p className="margin-b-lg color-m">{this.props.text}</p>
        </div>
      </section>
    )
  }
}

export { Container, Info, Link, Image, Grid, Interval }
