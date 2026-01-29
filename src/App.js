import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ContactUs from "./pages/ContactUs";
import Account from "./pages/Account";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Pages that NEED header & footer */}
          <Route index element={<HomePage />} />
          <Route path="shop-page" element={<ShopPage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
