import { BrowserRouter, Routes, Route } from "react-router-dom";
import { 
  Home, 
  Login, 
  Register, 
  NavigationBar, 
  ArtistsSection, 
  Artist, 
  Section, 
  Product, 
  Checkout } from "./pages";
import { AuthProvider } from "./contexts/AuthContext";
import { useState } from "react";
import { BagComponent } from "./pages/Bag";

export default function App() {
  const [displayBag, setDisplayBag] = useState(false);

  return(
    <AuthProvider>
      <BrowserRouter>
        <NavigationBar displayBag={displayBag} setDisplayBag={setDisplayBag}/>
        <BagComponent displayBag={displayBag} setDisplayBag={setDisplayBag} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />}/>
          <Route path="/artists" element={<ArtistsSection />}/>
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/product/:id" element={<Product />}/>
          <Route path="/cloths" element={<Section type="cloth" />} />
          <Route path="/album" element={<Section type="album" />} />
          <Route path="/acessory" element={<Section type="acessory" />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}