import React from 'react';
import "../styles/TopNav.css"
import Home from './Home';
import Button from ''

function TopNav(){
    return(
        <div className="top_main_body">
            <div className='left_side'>
                <p className='left_ptag'>Products</p>
                <p className='left_ptag'>Resources</p>
                <p className='left_ptag'>Support</p>
            </div>
        
            <div className='mid_side'>
                <p className='mid_ptag'>P
                    <span className='mid_span'>A</span>CIFI
                    <span className='mid_span'>A</span>
                </p>
            </div>
        
            <div className='right_side'>
                <p className='right_ptag'>Company</p>
                <p className='right_ptag'>Pricing</p>
                <button className='right_btn'>Company Us</button>
        
            </div>
        </div>
        );
    }

export default TopNav