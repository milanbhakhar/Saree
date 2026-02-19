import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CategoryPage from "./pages/CategoryPage";
import DetailsPage from "./pages/DetailsPage";
import ShoppingcartPage from "./pages/Shoppingcart";
import WishlistPage from "./pages/Wishlist";
import CheckoutPage from "./pages/CheckoutPage";
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
          <Route path="category-page" element={<CategoryPage />} />
          <Route path="details-page/:id" element={<DetailsPage />} />
          <Route path="shop-cart" element={<ShoppingcartPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="check-out" element={<CheckoutPage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
