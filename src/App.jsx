import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/UI/Modal";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Meals />
        <Modal />
      </CartContextProvider>
    </>
  );
}

export default App;
