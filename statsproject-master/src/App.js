import React , {Component} from 'react';
import Time from './Component/Time'
import Profil from './Component/Profil'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


class welcome extends React.Component{

 state={
   show : false
 }
  
//  test =()=>{
//   this.setState({show:this.state.show = true})
//      return this.state.show
   
//  }
  


hand=()=>{
  this.setState({
    ...this.state, show: !this.state.show
  })
}



  render(){
   
    console.log()


    return(
      <>
      <div className='tou'>
      <Time/>
       
   <h5>Click here to show profile </h5>
    <Button variant="primary" onClick={this.hand } >SHOW PROFIL</Button>
  

          {this.state.show && (<div> <Profil/> </div>) }
          
        

          </div>
     </>
    )
   

  }
}
export default welcome ;