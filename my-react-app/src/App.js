import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {List} from "./pages/List";
import {Edit} from "./pages/Edit";
import {Create} from "./pages/Create";
// import {Demo} from "./pages/Demo";
// import {Demo1} from "./pages/Demo1";
function App() {
  return (
      <>
        {/*<Demo color={'green'}/>*/}
        {/*  <Demo1></Demo1>*/}
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