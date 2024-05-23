import {Component} from 'react'
import Addnewpass from '../Addnewpass'
import Yourpass from '../Yourpass'
import './index.css'

class CombPass extends Component {
  render() {
    return (
      <div className="whole">
        <div>
          <img
            className="logo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          />
        </div>
        <Addnewpass />
        <Yourpass />
      </div>
    )
  }
}

export default CombPass
