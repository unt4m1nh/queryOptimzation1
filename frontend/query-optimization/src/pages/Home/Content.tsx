import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { TProducts } from '../../data/type';

interface IContentProps {
  products: TProducts[] | null;
}

const Content = ({ products }: IContentProps) => {
  if (products?.length === 0) {
    return (
      <h3>No matching items</h3>
    )
  }
  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 8, alignItems: 'center', justifyContent: 'space-evenly'}}>
      {/* {products?.map((product) => (
        <Card key={product._id} style={{ width: '22rem' }}>
          <Card.Img variant='top' src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.main_category}</Card.Text>
            <Card.Text>{product.sub_category}</Card.Text>
            <Card.Text>{product.discount_price}</Card.Text>
            <Button variant='primary'>Buy</Button>
          </Card.Body>
        </Card>
      ))} */}
    </div>
  );
};

export default Content;
