import Header from './Components/Header'
import Meals from './Components/Meals';
import Cart from './Components/cart';
import CartContextProvider from './Components/store/CartContext';
import UserprogressContextProvider from './Components/store/UserProgressContext';
function App() {
  return (
    <UserprogressContextProvider>
    <CartContextProvider>
      <Header />
      <Meals />
      <Cart />
    </CartContextProvider>
    </UserprogressContextProvider>
  );
}

export default App;
