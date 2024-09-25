// import { useState } from "react";
// import HomePage from "./Components/HomePage";
// import Navbar from "./Components/Navbar";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       {/* <Navbar /> */}
//       <HomePage />
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage"; // Import your components
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      {/* Wrap the component tree inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
