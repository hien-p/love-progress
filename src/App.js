import React, { useState, useEffect } from 'react';
import './App.css';
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
  return (
    <form className="shadow-form"> 
    <>
    <h1 > track the progress of our love</h1>
      <p>Chloe's love Progress Bar</p>
      <Progress done={45} />
      <p>Harry's love Progress Bar</p>
      <Progress done={70} />
    </>
    </form> 
  );
}

export default App;
