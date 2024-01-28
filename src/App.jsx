import { useEffect, useState } from 'react'
import './App.css'
import Home from './Component/Home'
import axios from 'axios';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Detail from './Component/Detail';
import Error from './Component/Error'

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
  },[])



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data}/>}/>
        <Route path="/detail/:id" element={<Detail />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </Router>
  )
}

export default App
