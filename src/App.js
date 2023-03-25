import React, { useState, useEffect } from 'react';
import './App.css';
import BlueHeartIcon from './components/BlueHeartIcon';
import timemachine from './assets/audio/timemachine.mp4';
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
  const [isButtonVisible, setIsButtonVisible] = useState(true);

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
    setIsFormVisible(true);
    setIsButtonVisible(false);
  }

  return (
    <div>
      {isButtonVisible &&
        <div>
        <button className="heart-button" onClick={handleButtonClick}>
          <BlueHeartIcon />
          press to see our love progress
        </button>
        
        <p className="current-time">current time: {date.replace(',', '').replace(/\//g, '/')}</p>
       
      </div>
      }
      
      {isFormVisible &&
        <form className="shadow-form"> 
        <h1>track the progress of our love</h1>
        
        <div className="progress-container">
          <p className="progress-label" style={{textAlign: 'left'}}>chloe's love Progress Bar</p>
          <Progress done={45} />
        </div>
        <div className="progress-container" style={{textAlign: 'left'}}>
          <p className="progress-label" style={{textAlign: 'left'}}>harry's love Progress Bar</p>
          <Progress done={70} />
          
          <audio controls>
            <source src={timemachine} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

      </form>
      }
    </div>
  );
}

export default App;
