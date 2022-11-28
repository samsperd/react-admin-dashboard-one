import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import New from "./pages/New/New";
import Single from "./pages/Single/Single";
import './styles/global.scss'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { useContext, useState } from 'react';
import { productInputs, userInputs } from './formSource'
import { DarkModeContext } from './context/darkModeContext';

function App() {

  const [toggleNav, setToggleNav] = useState(false)

  const { darkMode } = useContext(DarkModeContext)

  return (
        <BrowserRouter>
    <div className={ darkMode ? "App dark" : "App"}>
      <Sidebar toggle={toggleNav}  toggler={setToggleNav} />

      <div className={toggleNav ? 'AppContainer toggleMain' : 'AppContainer'}>
        <Navbar toggle={setToggleNav} toggled={toggleNav} />
          <Routes>
            <Route path="/">
              <Route index  element={<Home />} />
              <Route path="login"  element={<Login />} />
              <Route path="users">
                <Route index element={<List type={"Users"}  />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New inputs={userInputs} title="Register a New User" />} />
              </Route>
              <Route path="products">
                <Route index element={<List type={"Products"}  />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New inputs={productInputs} title="Add a New Product" />} />
              </Route>
            </Route>
          </Routes>

      </div>
    </div>
        </BrowserRouter>
  );
}

export default App;
