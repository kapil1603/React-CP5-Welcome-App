// Write your code here

import {Component} from 'react'
import './index.css'

// class Welcome extends Component {
//   render() {
//     return <h1> kapil </h1>
//   }
// }

class Welcome extends Component {
  state = {subscribe: 'Subscribe', subscribed: 'Subscribed'}

  sub = () => {
    this.setState(prevState => ({subscribe: prevState.subscribed}))
  }

  //   unsub = () => {
  //     this.setState(prevState => ({subscribed: prevState.subscribe}))
  //   }

  unsub = () => {
    this.setState({
      subscribe: 'Subscribe',
      subscribed: 'Subscribed',
    })
  }

  render() {
    const {subscribe, subscribed} = this.state
    let butt
    if (subscribe === 'Subscribe') {
      butt = (
        <button className="button" type="button" onClick={this.sub}>
          {subscribe}
        </button>
      )
    } else {
      butt = (
        <button className="button" type="button" onClick={this.unsub}>
          {subscribed}
        </button>
      )
    }
    return (
      <div className="Container">
        <h1 className="heading">Welcome</h1>
        <p className="para"> Thank you! Happy Learning</p>
        {butt}
      </div>
    )
  }
}

export default Welcome
