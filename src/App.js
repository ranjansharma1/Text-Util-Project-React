import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";

function App() {
  const [darkMode, setdarkMode] = useState("light");
  const [alert, setalert] = useState(null);
  const [colorMode, setColorMode] = useState("grey");
  const handleColorChange = (newColor) => {
    if (newColor === "blue") {
      document.body.style.backgroundColor = "#6ba2f4";
      showAlert("Blue Mode Enabled", "success");
      console.log("Blue mode enabled");
    } else if (newColor === "green") {
      document.body.style.backgroundColor = "#78f392";
      showAlert("Green Mode Enabled", "success");
      console.log("Green mode enabled");
    } else if (newColor === "red") {
      document.body.style.backgroundColor = "#ec4a4ac4";
      showAlert("Red Mode Enabled", "success");
      console.log("red mode enabled");
    } else {
      document.body.style.backgroundColor = "white";
      showAlert("Default Mode Enabled", "success");
      console.log("Light mode enabled");
    }
    setColorMode(newColor);
  };

  const enableDarkMode = () => {
    if (darkMode === "light") {
      console.log("enable dark mode");
      setdarkMode("dark");
      document.body.style.backgroundColor = "#424143";
      showAlert("Dark mode enabled", "success");
    } else {
      console.log("disable dark mode");
      setdarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    //It will fade out after 3 seconds
    setTimeout(() => {
      setalert(null);
    }, 3000);
    console.log("Set Alert successfully executed: ", message, type);
  };

  return (
    <Router basename="/Text-Util-Project-React">
      <Navbar
        title="TEXT-Utils"
        about="about us"
        mode={darkMode}
        toggleMode={enableDarkMode}
        colorChangeMode={handleColorChange}
        colorMode={colorMode}
      />
      <Alert alert={alert} />
      <Routes >
        <Route exact
          path="/"
          element={
            <TextForms
              heading="Enter the text to analyze!"
              mode={darkMode}
              showAlert={showAlert}
            />
          }
        />
        <Route path="/about" element={<About mode={darkMode} />} />
      </Routes>
    </Router>
  );
}
//Default help us to by default run the funtion
export default App;
