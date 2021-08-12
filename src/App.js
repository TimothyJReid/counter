import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset  } from './useractions'

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  function handleIncrement(){
    dispatch(increment())
  }
  function handleDecremet(){
    dispatch(decrement())
  }
  function hadleReset() {
    dispatch(reset())
  }
  return (
    <div>
      <h2>Current count {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecremet}>Decrement</button>
      <button onClick={hadleReset}>Reset</button>
      
    </div>
  );
}

export default App;
