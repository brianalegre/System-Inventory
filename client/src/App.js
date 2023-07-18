// Import
import React, { useState, useEffect } from "react";
import "./index.css";

// Import Components
import Search from "./Components/Search";
import Inventory from "./Components/Inventory";
import Navbar from "./Components/Navbars";

// Main Application
function App() {

  // useState to store data from API
  const [deviceInventory, setDeviceInventory] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3001/api/systems/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDeviceInventory(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  return (
    <div>
      <Navbar />
      {/* <Search /> */}
      {/* add prop */}
      <Inventory deviceInventory={deviceInventory} />
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