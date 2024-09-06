import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/UI/Cart";
import Modal from "./components/UI/Modal";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Meals />
        <Modal />
        <Cart />
      </CartContextProvider>
    </>
  );
}

export default App;
