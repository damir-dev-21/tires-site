import Header from "./components/header.component";
import MainPage from "./pages/MainPage";
import { Route, Routes } from 'react-router-dom'
import CatalogPage from "./pages/CatalogPage";
import CategoryPage from "./pages/CategoryPage";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Main from './pages/Main'
import CartPage from "./pages/CartPage";
import { connect } from "react-redux";
import { getCatalog, getProducts } from './redux/actions/products'
import { useEffect } from "react";
import Footer from "./components/footer.component";


function App({ products, getProducts, getCatalog, catalog }) {
  useEffect(() => {
    getProducts()
    getCatalog(products)
  }, [])
  return (
    <div className="App">
      {
        // props.isAuth ?
        <div>
          <Header />
          <Routes>
            <Route exact path="/tires-site" element={<MainPage />}></Route>
            <Route path="/catalog" element={<CatalogPage />}></Route>
            <Route path="/catalog/:category_name" element={<CategoryPage />}></Route>
            <Route path="/catalog/:category_name/:producer" element={<Products />}></Route>
            <Route path="/catalog/:category_name/:producer/:id" element={<Product />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
          <Footer initialProducts={products} catalog={catalog} />

        </div>

        // :
        // <Routes>
        //   <Route exact path="/" element={<AuthLogin />}></Route> 
        //   <Route exact path="/reg" element={<AuthReg  />}></Route>

        // </Routes>
      }

    </div>
  );
}

function mapStateToProps(state) {
  return {
    products: state.products.initialProducts,
    catalog: state.products.catalog
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => dispatch(getProducts()),
    getCatalog: (products) => dispatch(getCatalog(products))
  }
}

// function mapStateToProps(state) {
//   return {
//     isAuth: state.auth.isAuth
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);
