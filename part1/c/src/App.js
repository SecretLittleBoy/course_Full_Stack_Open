const Hello = (props) => {

  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>

      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}


const App = ({ age }) => {
  return (
    <div>
      < Hello name="lyh" age={age} />
      {
      // This is a comment
      }
    </div>
  )
}
export default App