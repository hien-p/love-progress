import React, { useState, useEffect } from 'react';
import './App.css';
import BlueHeartIcon from './components/BlueHeartIcon';

function Progress({ done }) {
  const [style, setStyle] = useState({});
  
  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      }
      
      setStyle(newStyle);
    }, 200);
  }, [done]);
  
  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </div>
  )
}

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const options = { day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
      const formattedDate = now.toLocaleString('en-GB', options);
      setDate(formattedDate);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  

  const handleButtonClick = () => {
    setIsFormVisible(!isFormVisible);
  }

  return (
    <div>
      <button className="heart-button" onClick={handleButtonClick}>
        <BlueHeartIcon />
        Press to see our love progress
      </button>
      {isFormVisible &&
        <form className="shadow-form"> 
          <>
            <h1>Track the progress of our love</h1>
            <p>Current time in Vietnam: {date.replace(',', '').replace(/\//g, '/')}</p>
            {/* <div className={`cs ${isLogoRotated ? 'rotate' : ''}`}>
              <img src="https://cdn.discordapp.com/avatars/953690599930859610/2d207a221f6c510f9250c427aa772222.webp?size=96" id="logo" alt="Logo" onClick={handleLogoClick} />
            </div> */}
            <p>Chloe's love Progress Bar</p>
            <Progress done={45} />
            {/* <div className={`cs ${isLogoRotated ? 'rotate' : ''}`}>
              <img src="https://cdn.discordapp.com/avatars/725994929133715526/2b4eeff926a7ab0574e82be4f153ebeb.webp?size=96" id="logo" alt="Logo" />
            </div> */}
            <p>Harry's love Progress Bar</p>
            <Progress done={70} />
          </>
        </form>
      }
    </div>
  );
}

export default App;
