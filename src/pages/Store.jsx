import { Row, Col } from 'react-bootstrap';
import { productsArray, getProductData } from '../productsStore';
import ProductCard from '../components/ProductCard';
function Store() {
  return (
    <>
      <div>
        <h1 align="center" className="p-3">
          Store
        </h1>
        <Row xs={1} md={3} className="g-4">
          {productsArray.map((product, idx) => (
            <Col align="center" key={idx}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Store;
