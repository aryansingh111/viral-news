import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import './App.css';

const App = () => {
  const [category, setCategory] = useState("General");
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  const handleLetsGoClick = () => {
    setShowWelcomeScreen(false);
  };

  return (
    <div>
      {showWelcomeScreen ? (
        <div className="welcome-screen">
          <button className="lets-go-button" onClick={handleLetsGoClick}>
            Let's Go...
          </button>
        </div>
      ) : (
        <>
          <Navbar setCategory={setCategory} />
          <NewsBoard category={category} />
          <div className="Foot">
            <p>&lt;/CREATED WITH ❤️ BY ARYAN SINGH&gt;</p>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
