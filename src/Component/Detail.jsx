import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Detail.css";


const Detail = () => {

  const {id} = useParams();
  const [data , setData ] = useState({});


  useEffect(()=>{
    axios.get(`http://localhost:3000/foods/${id}`)
    .then(res=>{
      console.log(res.data);
      setData(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  
  return (
    <div className='detailContainer'>
      <button>
        <Link to='/' className='back'>
            Back
        </Link>
      </button>
      <div className="detail">
        <div className="detailImage">
          <img src={data.Image} alt="" />
        </div>
        <div className="detailText">
          <h3>{data.Name}</h3>
          <p className='page'>{data.Ingredients}</p>
          <h5>{data.CookingInstructions}</h5>
        </div>
      </div>
    </div>
    
  )
    

}

export default Detail;