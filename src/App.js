import "./App.css";
import Loading from "./Loading.jsx";
import { react, useEffect, useState } from "react";
import "./Matrix.js";
import Navbar from "./Navbar.jsx";
import About from "./About.jsx";
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="App">
      <Navbar />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
