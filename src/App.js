import React from "react";
import Layout from "./components/layout/Layout.jsx";
import "./style/sass/styles.scss";

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <header className="App-header">
          <Layout></Layout>
        </header>
      </div>
    </React.StrictMode>
  );
}

export default App;
