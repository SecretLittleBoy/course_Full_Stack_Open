import React, { useState } from 'react'
const History = (props) => {
  console.log('props value in History is:', props)
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)


  const handleLeftClick = () => {
    console.log('left before', clicks.left)
    setClicks({ ...clicks, left: clicks.left + 1 })
    console.log('left before', clicks.left)
    setAll(allClicks.concat('L'))
    setTotal(clicks.left + clicks.right+1)
  }
  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 })
    setAll(allClicks.concat('R'))
    setTotal(clicks.left + clicks.right+1)
  }
  debugger
  return (
    <div>
      {clicks.left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {clicks.right}
      <History allClicks={allClicks} />
      <p>total {total}</p>
    </div>
  )
}
export default App