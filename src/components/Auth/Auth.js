import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

export default (props) => {
  const [auth, setAuth] = useState(null)

  useEffect(() => {
    fetch('auth/authentication/api/public/authentication', {
      method: 'GET',
      withCredentials: true,
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          sessionStorage.setItem('loggedIn', true)
          if (sessionStorage.getItem('loggedIn', true)) {
            setAuth(true)
          } else {
            setAuth(false)
          }
        } else {
          setAuth(false)
        }
      })
  }, [])

  if (auth === true || auth === false) {
    if (auth === false) {
      return <Redirect to="/login" />
    } else {
      return props.children
    }
  } else {
    return (
      <div className="d-flex flex-grow-1 justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
}