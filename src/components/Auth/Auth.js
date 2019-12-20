import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
// import Cookies from 'js-cookie';

export default () => {
  const [auth, setAuth] = useState(false)
  // const [cookie, setCookie] = useState()

  useEffect(() => {
    fetch('https://stage.attainr.io/attainr-core/auth/authentication/api/public/authentication', {
      method: 'GET',
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(data => {
        setAuth(data)
      })
  }, [])

  // console.log(cookie)

  if (auth) {
    return <Redirect to='/login' />
  }
  return (
    <div className="d-flex flex-grow-1 justify-content-center align-items-center vh-100">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}