import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CodeMirrorTemplate from "./components/CodeMirrorTemplate";

function App() {
  return (
    <div style = {{width: "500px", height: "300px"}}>
      <CodeMirrorTemplate></CodeMirrorTemplate>
      <button>run code</button>
    </div>
  );
}

export default App;
