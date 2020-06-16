import React from 'react'

class WhatIsReactPage extends React.Component
{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Component1 name="Josh"/>
    )
  }
}

class Component1 extends React.Component
{
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  updateText = (e) => {
    this.setState({ text: e.target.value})
  }

  render() {
    return(
      <div>
        <p>What {this.props.name} just typed are "{this.state.text}"</p>
        <input type="text" onChange={this.updateText}/>
      </div>
    )
  }
}

export default WhatIsReactPage
