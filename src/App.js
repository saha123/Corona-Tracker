import React,{ useState , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [num,setnum] = useState(0);

  useEffect(()=>{
    document.title = `You clicked me ${num} times`;
  });

  const Increment = () => {
    setnum(num+1);
  }

  return (
    <button onClick={Increment}>Click Me { num } </button>
  );
}

export default App;
