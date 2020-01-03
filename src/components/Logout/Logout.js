import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default () => {

  const [logout, setLogout] = useState(false)
  const [errMsg, setErrMsg] = useState(null)

  const logoutHandler = () => {
    fetch('auth/authentication/api/public/logout', {
      method: 'GET'
    })
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      }).then((response) => {
        sessionStorage.clear()
        setLogout(true)
      }).catch((error) => {
        setErrMsg('Something went wrong. Please try again!')
      });

  }

  if (logout) {
    return <Redirect to="/login" />
  } else {
    return (
      <>
        <button
          className="btn btn-outline-primary"
          onClick={logoutHandler}>Logout
        </button>
        {
          errMsg ?
            <div className="alert alert-danger mt-4" role="alert">{errMsg}</div>
            : null
        }
      </>
    )
  }
}