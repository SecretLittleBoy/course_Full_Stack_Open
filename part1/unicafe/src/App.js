import React, { useState } from 'react';
const Header = ({ text }) => {
  console.log({ text })
  return (
    <h1>{text}</h1>
  )
}
const MyButton = ({ onClick_func, text }) => {
  return (
    <button onClick={onClick_func} style={{ color: 'black', borderRadius: '5px' }}>{text}</button>
  );
};
const Mylabel = ({ text1, num, text2 }) => {
  return (
    <div>
      {text1} {num} {text2}
    </div>
  )
}
const Statistics = ({ good_num, neutral_num, bad_num }) => {
  if (good_num + neutral_num + bad_num <= 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <Mylabel text1="good" num={good_num} />
      <Mylabel text1={"neutral"} num={neutral_num} />
      <Mylabel text1={"bad"} num={bad_num} />
      <Mylabel text1={"all"} num={bad_num + neutral_num + good_num} />
      <Mylabel text1={"average"} num={(good_num - bad_num) / (bad_num + neutral_num + good_num)} />
      <Mylabel text1={"positive"} num={good_num / (bad_num + neutral_num + good_num)*100} text2={"%"} />
    </div>
  )
}
const App = () => {
  const [good_num, set_good_num] = useState(0)
  const [neutral_num, set_neutral_num] = useState(0)
  const [bad_num, set_bad_num] = useState(0)
  const good_feedback = () => {
    set_good_num(good_num + 1)
  }
  const neutral_feedback = () => [
    set_neutral_num(neutral_num + 1)
  ]
  const bad_feedback = () => {
    set_bad_num(bad_num + 1)
  }
  return (<div>
    <Header text="give feedback" />
    <MyButton onClick_func={good_feedback} text="good" />
    <MyButton onClick_func={neutral_feedback} text="neutral" />
    <MyButton onClick_func={bad_feedback} text="bad" />
    <Header text="statistics" />
    <Statistics good_num={good_num} neutral_num={neutral_num} bad_num={bad_num}/>
  </div>
  )

}
export default App