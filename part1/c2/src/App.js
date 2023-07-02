import React, { useState, useEffect } from "react";

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const App = () => {
  const [counter, setCounter] = useState(10);
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  useEffect(
    () => {
      const interval = setInterval(() => { setCounter((prevCounter) => prevCounter + 1); }, 1000);
      return () => clearInterval(interval);
    }
    , []);

  console.log('rendering...', counter);

  return (
    <div>
      <Hello name="lyh" age={counter} />
      {/* This is a comment */}
      <Button onClick={increaseByOne} text='plus' />
      <Button onClick={setToZero} text='zero' />
      <Button onClick={decreaseByOne} text='minus' />
    </div>
  );
};

export default App;
