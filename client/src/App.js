import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {/* Display the response data */}
      {/* if response is undefined display 'Loading...' */}
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        // Display response data if there is a response
        backendData.users.map((user, i) => (
          <p>{user}</p>
        ))
      )}
    </div>
  )
}

export default App