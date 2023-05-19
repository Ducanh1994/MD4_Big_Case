import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {List} from "./pages/List";
import {Edit} from "./pages/Edit";
import {Create} from "./pages/Create";

function App() {
  return (
      <>
          <Routes>
              <Route path={'/home'} element={<Home/>}>
                  <Route path={'/home/list'} element={<List/>}/>
                  <Route path={'/home/create'} element={<Create/>}/>
                  <Route path={'/home/edit/:id'} element={<Edit/>}/>
              </Route>
          </Routes>
      </>
  );
}

export default App;