import React, { useState } from 'react';
import Cookies from 'js-cookie';
import qs from 'qs'

export default (props) => {

  const [formData, setFormData] = useState({
    username: null,
    password: null
  })
  const [errMsg, setErrMsg] = useState(null)

  const onChangeHandler = (value, name) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onLoginHandler = (event) => {
    event.preventDefault()
    fetch('auth/authentication/api/public/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-CSRF-TOKEN": Cookies.get('CSRF-TOKEN')
      },
      body: qs.stringify({
        username: formData.username,
        password: formData.password
      })
    })
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      }).then((response) => {
        setErrMsg(null)
        props.history.push('/')
      }).catch((error) => {
        setErrMsg('Something went wrong. Please try again!')
      });
  }

  return (
    <div className="container">
      <div className="col-md-6 mt-5 mx-auto text-center">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={(e) => onChangeHandler(e.target.value, e.target.name)}
              autoFocus={true}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="username"
              placeholder="Enter email"></input>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={(e) => onChangeHandler(e.target.value, e.target.name)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              placeholder="Password"></input>
          </div>
          <button
            onClick={onLoginHandler}
            type="submit"
            className="btn btn-primary">Submit
          </button>
        </form>
        {
          errMsg ?
            <div className="alert alert-danger mt-4" role="alert">{errMsg}</div>
            : null
        }
      </div>
    </div>
  )
}