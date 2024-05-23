import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'

const colorList = ['yellow', 'green', 'orange', 'brown', 'blue']

class Addnewpass extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passList: [],
  }

  web = event => {
    this.setState({website: event.target.value})
  }

  user = event => {
    this.setState({username: event.target.value})
  }

  pass = event => {
    this.setState({password: event.target.value})
  }

  clin = () => {
    const {username, website, password} = this.state
    const initial = website.slice(0, 1).toUpperCase()
    const classValue = colorList[Math.floor(Math.random() * 5)]
    const value = {
      id: uuidv4(),
      website,
      username,
      password,
      initial,
      classValue,
    }
    this.setState(prevState => ({
      passList: [...prevState.passList, value],
      website: '',
      username: '',
      password: '',
    }))
  }

  render() {
    return (
      <div>
        <div className="card1">
          <div className="innercard">
            <h1 className="head">Add new password </h1>
            <div className="inputs">
              <img
                alt="website"
                className="web"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              />
              <input
                onChange={this.web}
                placeholder="Enter Website"
                className="inp"
                type="text"
              />
            </div>
            <div className="inputs">
              <img
                alt="website"
                className="web"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              />
              <input
                onChange={this.user}
                placeholder="Enter Username"
                className="inp"
                type="text"
              />
            </div>
            <div className="inputs">
              <img
                alt="website"
                className="web"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              />
              <input
                onChange={this.pass}
                placeholder="Enter Password"
                className="inp"
                type="text"
              />
            </div>
            <button onClick={this.clin} type="button" className="but">
              Add
            </button>
          </div>
          <div className="image">
            <img
              alt="password manager"
              className="img1"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Addnewpass
