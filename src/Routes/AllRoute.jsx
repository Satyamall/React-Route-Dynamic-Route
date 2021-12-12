
import { Switch } from "react-router-dom";
import Home from "../Pages/Home";
import AllProducts from "../Pages/AllProducts";
import { Route } from "react-router-dom";
import ProductDetails from "../Pages/ProductDetails";
import NoMatch from "../Pages/NoMatch";

export default function AllRoute() {

   return (
      <>
         <Switch>
            <Route exact path="/">
               <Home />
            </Route>
            <Route exact path="/products">
               <AllProducts />
            </Route>
            <Route exact path="/products/:id">
               <ProductDetails />
            </Route>
            <Route>
               <NoMatch/>
            </Route>
            <Route>
               <h1>Create a 404 page</h1>
            </Route>
         </Switch>
      </>
   )
}