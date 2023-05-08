import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="App1">
        <Header />
        <Main />
      </div>
      <div className="App1">
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
