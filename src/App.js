import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
  let count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);

  const dispatch = useDispatch();

  const increseCount = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const decreseCount =()=> {
    dispatch({type: "DECREMENT", payload: {num: 2} });
  }

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "gigi", password: "123" } });
  };

  return (
    <div>
      <h2>{id}{password}</h2>
      <h1>count:{count}</h1>
      <button onClick={increseCount}> Click to Increase </button>
      <button onClick={decreseCount}> Click to decrease </button>
      <button onClick={login}> Click to login </button>
      <Box />
    </div>
  );
}

export default App;
