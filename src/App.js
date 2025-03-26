import React from "react";
import Homepage from "./Homepage";
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <div>
        <Homepage />
      </div>
    </BrowserRouter>
  );
}

export default App;
