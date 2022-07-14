import { useState } from 'react'
import React from 'react'
import Button from 'react-bootstrap/Button'
// import adminService from '../../services/adminService'
import "bootstrap/dist/css/bootstrap.min.css"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    userName: '',
    pw: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // const handleSubmit = async evt => {
  //   evt.preventDefault()
  //   try {
  //     await adminService.login(formData)
  //     if(adminService.getUser()) {
  //       window.location.href = '/dashboard'
  //     }
  //   } catch (err) {
  //     console.log("error")
  //   }
  // }

  return (
    <div className="login-page">
        <div className='form-container'>
          <div className="col-md-12">
            {/* <form className="login-form" onSubmit={handleSubmit}> */}
              <div className="title-container">
                <h2 style={{ textAlign: "center" }}>Log In</h2>
              </div>
              <div className="form-group">
                  <input className="form-control" type="username" autoComplete="off" placeholder="Username" required name="userName" onChange={handleChange} />
              </div>
              <div className="form-group">
                  <input className="form-control" type="password" autoComplete="off" placeholder="Password" required name="pw" onChange={handleChange} />
              </div>
              <div className="form-action">
                <Button variant="primary" size="sm" type="submit">Submit</Button>
              </div>
            {/* </form> */}
          </div>
        </div>
    </div>
  )
}

export default LoginPage