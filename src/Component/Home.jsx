import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

const Home = ({data}) => {
  return (
    <div className='container'>
        <div className="logo">
            <h1>Food <span>Receipes</span></h1>
        </div>
        <hr />
        <div className="boxs">
            {
                data.map((d,id)=>{
                    return(
                        <div className="box" key={id}>
                            <Link to={`/detail/${d.id}`}>
                                <div className="image">
                                    <img src={d.Image} alt="image1" />
                                    <span>{d.Guid}</span>
                                </div>
                            </Link>
                            <div className="text">
                                <h2>{d.Name}</h2>
                            </div>
                        </div>
                        )
                })
            }
        </div>
    </div>
  )
}

export default Home;