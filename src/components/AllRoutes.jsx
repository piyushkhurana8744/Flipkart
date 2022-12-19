import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Mi from "../Pages/Mi"
import SingleProductPage from "../Pages/SingleProductpage"
import Cart from "../Pages/Cart"
import Apple from "../Pages/Apple."
import SignUp from "../Pages/SignUp"
import Login from "../Pages/Login"
function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/mi"} element={<Mi />}></Route>
                <Route path={"/singleproductpage/:id"} element={<SingleProductPage />}></Route>
                <Route path={"/cart"} element={<Cart />}></Route>
                <Route path={"/apple"} element={<Apple />}></Route>
                <Route path={"/login"} element={<Login />}></Route>
                <Route path={"signup"} element={<SignUp />}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes