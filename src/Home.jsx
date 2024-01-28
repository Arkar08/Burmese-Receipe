import React from 'react'
import './Home.css';

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
                        <div className="image">
                            <img src={d.Image} alt="image1" />
                        </div>
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