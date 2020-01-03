import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import Auth from '../Auth/Auth';
import Logout from '../Logout/Logout';
import Cookies from 'js-cookie';

export default () => {

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const [state, setState] = useState({
    credentials: null,
    recipients: null,
    loading: false,
    filter: sessionStorage.getItem('filter')
  })

  const prevFilter = usePrevious(state.filter);

  useEffect(() => {

    if (prevFilter !== state.filter) {
      if (sessionStorage.getItem('filter')){
        sessionStorage.setItem('filter', state.filter)
      } else {
        sessionStorage.setItem('filter', 'from=01-01-0001&to=31-12-9998')
      }
      fetch(`/atnr/api/issuers/8234f938-753b-4bf3-be99-13faadfb3480/recipients`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(recipients => {
          if (recipients) {
            fetch(`/atnr/api/issuers/8234f938-753b-4bf3-be99-13faadfb3480/credentials?${sessionStorage.getItem('filter')}`, {
              method: 'GET'
            })
              .then(response => response.json())
              .then(data => {
                setState({ ...state, credentials: data.credentials, recipients: recipients })
              })
          }
        })
    }
  }, [state, prevFilter])

  const statusArr = ['All', 'Reference%20Letter(ext)', 'Diploma']

  const updateListFilter = (type, filter) => {
    if (type === 'credentialClassName' && filter === 'All'){
      setState({...state, filter: `from=01-01-0001&to=31-12-9998`})
    } else {
      setState({...state, filter: `${type}=${filter}&from=01-01-0001&to=31-12-9998`})
    }
  }

  return (
    <Auth>
      <div className="container mt-5">
        <div className="row pt-5">
          <div className="col-md-6 mx-auto text-center">
            <div className="dropdown">
              <button
                className="btn btn-outline-primary shadow-none dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">Sort by Status
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {
                  statusArr.map((status, id) => (
                    <span
                      key={id}
                      onClick={() => updateListFilter('credentialClassName', status)}
                      className="dropdown-item">{status}
                    </span>
                  ))
                }
              </div>
            </div>
            <ul className="list-group my-4">
              {
                state.credentials ?
                  state.credentials.map((el, id) => (
                    <Link key={id} to={"/credential-details/" + el.credential.id}>
                      <li className="list-group-item">{el.credential.credentialClass.name}</li>
                    </Link>
                  ))
                  :
                  <div className="spinner-border text-primary mx-auto my-5" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
              }
            </ul>
            <Logout />
          </div>
        </div>
      </div>
    </Auth>
  )
}