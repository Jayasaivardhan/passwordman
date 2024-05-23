import './index.css'
import {Component} from 'react'

class Addaccount extends Component {
  state = {isShow: false}

  showPassword = e => {
    if (e.target.checked) {
      this.setState({isShow: true})
    } else {
      this.setState({isShow: false})
    }
  }

  render() {
    const {passList} = this.props
    const {isShow} = this.state
    return (
      <ul>
        {passList.map(eachValue => (
          <li className="item-list" id={eachValue.id} key={eachValue.id}>
            <p className={`initial ${eachValue.classAdd}`}>
              {eachValue.initialValue}
            </p>
            <div className="list-content">
              <p className="website">{eachValue.websiteName}</p>
              <p className="website">{eachValue.userName}</p>
              {!isShow && (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                  className="stars-image"
                  alt="stars"
                />
              )}

              {isShow && <p className="website">{eachValue.Password}</p>}
            </div>
            <button type="button" className="del-btn">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                className="del-image"
                alt="delete"
              />
            </button>
          </li>
        ))}
      </ul>
    )
  }
}
export default Addaccount
