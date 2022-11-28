import React from 'react';
import '../styles/Home.css'
import Truecaller from '../../../assets/images/truecaller.jpg'

function Home(){
    return(
        <div className="home_page">
            <div>
                <img src={Truecaller} alt='truecaller' className='image' />
            </div>
        </div>
    );
}

export default Home
