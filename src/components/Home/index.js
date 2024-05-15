// Write your code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  state={isLoggedIn:false}
  onLogin=()=>{
    this.setState((prevState)=>({isLoggedIn:true}))
  }
  onLogout=()=>{
    this.setState((prevState)=>({isLoggedIn:false}))
  }
  render() {
    const {isLoggedIn}=this.state
    return (
      <div className="homeContainer">
        <div className="mainContainer">
        {isLoggedIn ? <h1 className="head1">Welcome User</h1> : <h1 className="head1">Please Login</h1>}
          {isLoggedIn ?  <button className="btn1" type="button" onClick={this.onLogout}>
            Logout
          </button> : <button className="btn1" type="button" onClick={this.onLogin}>
            Login
          </button>}
        </div>
      </div>
    )
  }
}
export default Home
