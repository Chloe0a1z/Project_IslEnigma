import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import ShoppingCart from "./pages/shoppingCartPage/ShoppingCartPage";
import CheckOutPage from "./pages/checkoutPage/CheckOutPage";
import MapPage from "./pages/mappage";
import TicketPage from "./pages/ticketpage";

import InfoEventPage from "./pages/infoEventPage";
import InfoInfoPage from "./pages/infoInfoPage";
import InfoFAQPage from "./pages/infoFAQPage";
import RoomMorePage from "./pages/roomMorePage";

import ShoppingSuccessPage from "./pages/shoppingSuccessPage/ShoppingSuccessPage";
import CartLayout from "./components/layout/CartLayout";
import Hello from "./Hello";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="cart" element={<CartLayout />}>
          <Route index element={<ShoppingCart />} />
          <Route path="checkout" element={<CheckOutPage />} />
          <Route path="shoppingSuccess" element={<ShoppingSuccessPage />} />
        </Route>
        <Route path="/mappage" element={<MapPage />} />
        <Route path="/ticketpage" element={<TicketPage />} />

        <Route path="/infoEventPage" element={<InfoEventPage />} />
        <Route path="/infoEventPage/infoInfoPage" element={<InfoInfoPage />} />
        <Route path="/infoEvent/infoFAQPage" element={<InfoFAQPage />} />

        {/* <Route path="/roomPage" element={< RoomPage />}/> */}
        <Route path="/room/roomMorePage" element={<RoomMorePage />} />
      </Route>
    </Routes>
  );
}

export default App;
