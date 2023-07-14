// Import
import React from "react";
import "./index.css";


// Import Components
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";


// Main Application
function App() {
  return (
    <div>
      <Navbar />
      <Search />
    </div>
  )
};


export default App;

























// import React, { useEffect, useState } from 'react'

// function App() {

//   const [backendData, setBackendData] = useState([{}])

//   useEffect(() => {
//     fetch("/api").then(
//       response => response.json()
//     ).then(
//       data => {
//         setBackendData(data)
//       }
//     )
//   }, [])

//   return (
//     <div>
//       {/* Display the response data */}
//       {/* if response is undefined display 'Loading...' */}
//       {(typeof backendData.users === 'undefined') ? (
//         <p>Loading...</p>
//       ) : (
//         // Display response data if there is a response
//         backendData.users.map((user, i) => (
//           <p>{user}</p>
//         ))
//       )}
//     </div>
//   )
// }

// export default App