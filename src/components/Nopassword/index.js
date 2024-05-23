import {Component} from 'react'
import './index.css'

class Nopassword extends Component {
  render() {
    return (
      <div className="nopass">
        <img
          className="imgNo"
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
        />
        <p className="noPara"> No Passwords </p>
      </div>
    )
  }
}

export default Nopassword
