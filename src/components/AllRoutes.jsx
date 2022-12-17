import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Mi from "../Pages/Mi"
import SingleProductPage from "../Pages/SingleProductpage"
import Cart from "../Pages/Cart"
function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/mi"} element={<Mi />}></Route>
                <Route path={"/singleproductpage/:id"} element={<SingleProductPage />}></Route>
                <Route path={"/cart"} element={<Cart />}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes