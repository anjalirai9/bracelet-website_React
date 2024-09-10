
import Carousel from 'react-bootstrap/Carousel';
import a1 from "../images/a1.jpeg";
import a2 from "../images/a2.jpeg";
import a4 from "../images/a4.jpeg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';

import { useDispatch } from 'react-redux';
import { addcartData } from '../addtocartSlice';


const Home=()=>{
const [mydata, setMydata]=useState([]);
const dispatch= useDispatch();

const loadData=()=>{
   let api="http://localhost:3000/products";
   axios.get(api).then((res)=>{
    setMydata(res.data);
   })
}

useEffect(()=>{
  loadData();
}, [])


const addDataToCart=(id, name, cate, brand, price, desc, image)=>{
     dispatch(addcartData({id:id, name:name, category:cate, 
      brand:brand, price:price, description:desc,image:image, qnty:1}))
}

const ans=mydata.map((key)=>{
   return(
    <>
     <Card style={{ width: '250px', marginTop:"20px"}}>
      <Card.Img variant="top" src={key.image} />
      <Card.Body>
        <Card.Title> {key.name} </Card.Title>
        <h4  style={{color:"blue", fontSize:"14px"}}>  Brand : { key.brand} 

         {" "}  For - {key.category}
        </h4>
        <Card.Text>
           {key.description}
        </Card.Text>
         <h4 style={{color:"red", fontSize:"16px"}}> Price : {key.price} </h4> 
        <Button variant="primary" 
        onClick={()=>{addDataToCart(key.id, key.name, key.category, key.brand, key.price, key.description, key.image)}}>Add To Cart</Button>
      </Card.Body>
    </Card>
    
    </>
   )
})



    return(
        <>
          
          <Carousel>
      <Carousel.Item>
      <img src={a1}  style={{width:"100%", height:"670px"}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item
      >
      <Carousel.Item>
      <img src={a2} style={{width:"100%", height:"670px"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={a4} style={{width:"100%", height:"710px"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

       <div id="proHeading">
        <h1> Our Premium Watches</h1>
       </div>
       
       <div id="homeProduct">
        {ans}        
       </div>

        </>
    )
}

export default Home;