import React from 'react';
import '../styles/Home.css'
import TopNav from './TopNav';
import Button from '../../../reusableComponents/Button';
import Hero from "../../home/components/Hero"
import Counter from './StateMgt';

function Home(){
    return(
        <div className="home_page">
            <TopNav />
            <Hero />
            <Button />
            <Counter />
        </div>
    );
}

export default Home
