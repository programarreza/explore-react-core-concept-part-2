import './App.css';
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
  function handleClick(){
    alert('button click');
  }

  const handleClick2 = () => {
    alert('button click2');
  }

  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
    <h3>React Core Concepts</h3>
    <Users></Users>
    <Friends />
    <Team></Team>

    <Counter></Counter>

    <button onClick={handleClick}>Click Me</button>
    <button onClick={handleClick2}>click 2</button>
    <button onClick={() => {alert('third clicked')}}>third</button>
    <button onClick={() => {addToFive(5)}}>Four</button>
    </>
  )
}

export default App
