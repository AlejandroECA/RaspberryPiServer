import React from 'react';
import PowerButtonRive from './Rive-Components/START.animation';
import {Link, useNavigate} from 'react-router-dom'
import Header from './SubComponents/header'

const Home = () =>{

    const navigate = useNavigate()


    const handleClick = (e) => {

        e.preventDefault();

        setTimeout(() => {
            navigate('/1')
            }, 2000);
        
    }




    return(
        <div style ={{
            backgroundColor:'rgb(3,15,22)', 
            with:'100vw',
            height:'100vh',
            color:'white'
        }}>
            <Header />
            <Link to={'/1'} onClick={handleClick}>
                <PowerButtonRive/>
            </Link>
        </div>
    )
}

export default Home