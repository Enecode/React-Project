import React from "react"
import Button from "../../../reusableComponents/Button"
import '../styles/Hero.css'

function Hero(){
    return(
        <div className="hero_main">
            <section className="hero_sec">
                <p className="hero_ptag_one">Turn your product into something that sticks forever</p>
                <p className="hero_ptag_two">We offer a beautiful, high-end website that hook your audience, multiply your engagement and impression</p>
                <div className="hero_btn">
                    <Button 
                        name="Get started"
                        width="40%"
                        height="50px"
                        borderTopLeft="0px"
                        borderBottomLeft="16px"
                        borderBottomRight="0px"
                        borderTopRight="16"
                        color="white"
                        bgColor="#ec502d"
                        border="none"
                    />

                    <Button 
                        name="Our Prices"
                        width="40%"
                        height="50px"
                        borderTopLeft="0px"
                        borderBottomLeft="16px"
                        borderBottomRight="0px"
                        borderTopRight="16"
                        color="#black"
                        bgColor="#white"
                        border="none"
                    />
                </div>            
            </section>
        </div>
    )
}

export default Hero;