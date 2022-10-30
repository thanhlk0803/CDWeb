import React from 'react';
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
function OrderFood() {
  // Declare a new state variable, which we'll call "count"
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

console.log(windowDimensions.height );
  return (
    <div style={{height:windowDimensions.height,width:windowDimensions.width}}>
      <div style={{display:'flex',backgroundColor:"blue",flexDirection: "column"}}>
    n
      </div>
      <div style={{display:'flex',backgroundColor:"red"}}>
    a
    </div>
    <div style={{display:'flex',backgroundColor:"yellow"}}>
    a
    </div>
    </div>
  );
}
export default OrderFood;
