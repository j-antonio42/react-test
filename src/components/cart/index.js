import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ProductCard = (props) => {
    const {name, price, description,}=props.productData
    const {productId, clickHandler}=props
  return (
    <div  >
      <Card>
        <CardBody>
            <CardTitle tag="h5">{name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 ">${price}.00</CardSubtitle>
            <CardText>{description}</CardText>
            <Button 
                type='button' 
                color='success'
                data-key={productId} 
                onClick={clickHandler}
            >Agregar</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;