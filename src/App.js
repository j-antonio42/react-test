import React, { useState } from 'react'
import data from './components/mockData';
import './App.scss';
import ProductCard from './components/cart';
//import ProductList from './components/cartList';
import {
  Container,
  Col,
  Row, 
  ListGroup, 
  ListGroupItem 
  } from 'reactstrap';

const App = () => {
  const [products, setProducts]= useState(data.products)
  const [cart, setCart]=useState([])
 
  function addToCart(event){
     const productIndex = event.target.dataset.key
     console.log(products[productIndex])
     setCart([...cart,products[productIndex]])
  }

  return(
    <Container fluid>
      <Row>
      <Col xs='12' md='7'>
      {products.map((item, index) => {

      return (
        <ProductCard 
            key={index}
            productId={index}
          //  productData={{
          //     name: item.name,
          //     price: item.price,
          //     description: item.description
          //     }}
             productData={item}
            clickHandler={addToCart}  
              />
      )
    })}
      </Col>
      <Col xs='12' md='5'>
       <ListGroup>
         {
           cart.map((item,index) =>{
            const {name, price} = item
            return  <ListGroupItem 
                    className = 'd-flex justify-content-between'>
                      {name}<span>${price}.00</span> 
                    </ListGroupItem>
           })
         }
         <ListGroupItem 
            className = 'd-flex justify-content-between'                   >Total<span>${
              cart.reduce((accum,item)=>{
                return accum + item.price
              },0)
              }.00</span> 
          </ListGroupItem>
       
       </ListGroup>
      </Col>
      </Row>
    </Container>
  )
   
}


export default App;
