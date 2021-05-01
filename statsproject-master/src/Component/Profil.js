import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import { Button, ListGroup } from 'react-bootstrap';




class Profil extends Component {


    state ={      bio:"18 December 1879 ", 
                  imgSrc:"./logo.jpg",
                  fullName:'Khaled Bouzid '   ,
                  profession:"Actor"
           };




    render() {
        return (
            <>
            
          
            <Card style={{ width: '30rem' }} className="hello" >
  <Card.Img variant="top" src={this.state.imgSrc} />
  <Card.Body>
    
    <Card.Text>
            
            
            
    </Card.Text>
    <Card.Header><h1>Information</h1></Card.Header>
  <ListGroup variant="flush" >
    <ListGroup.Item> <h3> <span className="object" >Name : 
                  {this.state.fullName}</span></h3></ListGroup.Item>
    <ListGroup.Item><h3>Bio :{this.state.bio}</h3></ListGroup.Item>
    <ListGroup.Item><h3>Profession :  {this.state.profession}</h3></ListGroup.Item>
  </ListGroup>

  </Card.Body>
</Card>
           </>
        
        );
    }
}

export default Profil;
