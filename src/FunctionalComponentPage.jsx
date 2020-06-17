import React from 'react'

/**
 * ppt p.3
 * functional component較簡單好學，效能也較好
 * functional component只會因為傳入的props改變
 * functional component 沒有state 也沒有 lifecycle
 */
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
