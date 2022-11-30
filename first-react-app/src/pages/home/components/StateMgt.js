import React, {Component} from "react"

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            color: "blue"
            
        }
    }
    handleColorState=()=>{
        this.setState({color:""})
    }
    render(){
        return(
            <div style={{marginBottom:"40px"}}>
                <p style={{color: this.state.color}}>Love for humanity</p>
                <div><button 
                type="button"
                onClick={this.handleColorState}
                style={{
                    backgroundColor: this.state.color,
                    width:"70px",
                    height:"40px"
                }}
                 className='click'>Click me</button></div>
            </div>
            
        )
    }
}

export default Counter;