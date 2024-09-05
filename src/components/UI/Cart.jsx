import { useContext } from "react";
import Button from "./Button";
import Modal from "./Modal";
import CartContext from "../../store/CartContext";

export default function Cart() {
    const cartCtx = useContext(CartContext)
  return (
    <Modal className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => {
            
        })}
      </ul>
      <p className="cart-total">total price</p>
      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
