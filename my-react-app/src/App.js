import {Route, Routes} from "react-router-dom";
import {Login} from "./pages/user/Login";
import {Register} from "./pages/user/Register";
import {Home} from "./pages/home/Home";
import {List} from "./pages/home/products/List";
import {Create} from "./pages/home/products/Create";
import Path from "./constant/Path";


function App() {
    return (
        <>
            <Routes>
                <Route path={Path.LOGIN} element={<Login/>}/>
                <Route path={Path.REGISTER} element={<Register/>}/>
                <Route path={Path.HOME} element={<Home/>}>
                    <Route path='' element={<List/>}/>
                    <Route path='create' element={<Create/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;