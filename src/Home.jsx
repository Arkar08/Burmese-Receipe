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
                            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image1" />
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