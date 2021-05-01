import React, { Component } from 'react';
import '../App.css'
class Time extends Component {

    state={
        time :0
    }

tick=()=>{
    this.setState({
        time:this.state.time +1
    })
    return this.state.time ;
}

componentDidMount(){
    var timer = setInterval(this.tick , 1000)
    this.setState({time: timer})
        
    
}







    render() {

const Displaytime=()=>{
if (this.state.time < 60){
    return <span className='time' > {this.state.time +'seconde'}</span>
}else{

const SS = this.state.time % 60
const MM = ((this.state.time /60)%60)
const HH =(this.state.time /(60*60))
return<span className="time">Hour:{Math.trunc(HH)} Minute:{Math.trunc(MM)}  Second {SS}</span>



}


}




        return (
            <div className="timer" >
                {Displaytime()}
            </div>
        );
    }
}

export default Time;
