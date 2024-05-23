import {Component} from 'react'
import Nopassword from '../Nopassword'
import './index.css'

class Yourpass extends Component {
  state = {count: false, length: 0}

  render() {
    const {length, count} = this.state
    return (
      <div className="card2">
        <div className="yourPasswords">
          <div className="content">
            <p className="para"> Your Passwords </p>
            <p className="Passcount"> {length} </p>
          </div>
          <div className="search_bar">
            <img
              className="search"
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            />
            <input placeholder="Search" className="bar" type="search" />
          </div>
        </div>
        <hr className="line" />
        <div className="Show">
          <input className="box" id="checkbox" type="checkbox" />
          <label className="showPass" htmlFor="checkbox">
            Show Passwords
          </label>
        </div>
        {!count && <Nopassword />}
        {}
      </div>
    )
  }
}

export default Yourpass
