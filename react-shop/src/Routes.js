import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductsGallery from "./pages/ProductsGallery";
import Home from "./pages/Home";
import GetProduct from "./pages/GetProduct";
import Cart from "./components/Cart";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={ProductsGallery} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/product/1" exact component={GetProduct} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
