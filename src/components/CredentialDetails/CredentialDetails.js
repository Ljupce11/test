import React, { useState, useEffect } from 'react';

export default (props) => {

  const [credentialDetails, setCredentialDetails] = useState()

  useEffect(() => {
    fetch(`/atnr/api/public/credentials/${props.match.params.id}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        setCredentialDetails(data.credential)
      })
  }, [props])

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto text-center">
          {
            credentialDetails ?
              <>
                <h3>
                  Credential ID:
                </h3>
                <span>{credentialDetails.id}</span>
                <h3>
                  Credential Name:
                </h3>
                <span>{credentialDetails.credentialClass.name}</span>
              </>
              : null
          }
        </div>
      </div>
    </div>
  )
}