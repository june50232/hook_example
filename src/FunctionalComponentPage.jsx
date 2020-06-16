import React from 'react'

const Context = props => <p>What {props.name} just typed are "{props.text}"</p>

class FunctionalComponentPage extends React.Component
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
        <Context name="Josh" text={this.state.text}/>
        <input type="text" onChange={this.updateText}/>
      </div>
    )
  }
}

export default FunctionalComponentPage