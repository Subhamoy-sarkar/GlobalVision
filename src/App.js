import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Drawer from "./components/Drawer";
import Guide from "./components/Guide";


import './styles/app.css';
function App() {
  return (
    <Router >
        <Drawer></Drawer>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Guide" element={<Guide/>}/>
        </Routes>
    </Router>
  );
}

export default App;
