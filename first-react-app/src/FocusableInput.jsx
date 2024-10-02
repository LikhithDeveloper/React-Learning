import React, { useState, useEffect } from 'react';

function FocusableInput() {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    for (let i = 0; i <= 1000; i++) {
      setTimeout(() => {
        setNumbers(i);
      }, i*2); // Delay each state update by 100ms
    }
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <h2 style={{'font-size':'50px'}}>The numbers are {numbers}</h2>
    </>
  );
}

export default FocusableInput;
