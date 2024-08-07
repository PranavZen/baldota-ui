import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import HomePage from "./pages/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ProductListing from "./pages/ProductListing";
import AboutUs from "./pages/AboutUs";
import SingleCategoriesList from "./pages/SingleCategoriesList";
import { HelmetProvider } from "react-helmet-async";
import FliterAllProduct from "./pages/FliterAllProduct";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter forceRefresh={true}>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:singleItem" element={<ProductDetails />} />
          <Route
            path="/categories/:singleItem"
            element={<SingleCategoriesList />}
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products-filter" element={<FliterAllProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
