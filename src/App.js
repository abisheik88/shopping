import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ItemsList } from "./ItemsList";
import { Navigation } from "./Navigation";

function App() {
 const [cartCount, setCartCount]=useState(0);

  return (
    <div className="App">
      <Navigation cartCount={cartCount} />
      <Header/>
      <ItemsList cartCount={cartCount} setCartCount={setCartCount} />
      <Footer/>
    </div>
  );
}

export default App;
