import { Button, Container, Navbar, Modal } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';

function NavbarComponent() {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">E-Commerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((item, idx) => (
                <CartProduct
                  key={idx}
                  id={item.id}
                  quantity={item.quantity}
                ></CartProduct>
              ))}
              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
              <Button variant="success">Purchase Items</Button>
            </>
          ) : (
            <p>Your cart is empty</p>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
