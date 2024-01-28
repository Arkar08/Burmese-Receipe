import { useEffect, useState } from 'react'
import './App.css'
import Home from './Home'
import axios from 'axios';

function App() {

  const [data , setData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/foods')
    .then(res=>{
      setData(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  })
  return (
    <>
      <Home  data= {data}/>
    </>
  )
}

export default App
