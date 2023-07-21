// Write your code here

import {Component} from 'react'

class Welcome extends Component {
  state = {subscribe: true}

  render() {
    const {subscribe} = this.subscribe
    let butt
    if (subscribe) {
      butt = (
        <button className="button" type="button">
          Subscribe
        </button>
      )
    } else {
      butt = (
        <button className="button" type="button">
          Subscribed
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
