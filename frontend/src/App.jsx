import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {reqFromDb} from "./dbUtils.js";

function App() {
  const [count, setCount] = useState(0)
    const testDb = async (e) => {
      e.preventDefault();
      let result = await reqFromDb('get', 'foods');
      console.log(result);
    }

  return (
    <>
      Hack the valley project
    </>
  )
}

export default App
