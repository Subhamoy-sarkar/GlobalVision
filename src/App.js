import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Main from "./components/Main";
import Drawer from "./components/Drawer";
import Guide from "./components/Guide";
import './styles/app.css';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";

function App() {
  const { isAuthenticated } = useAuth0();
  if(!isAuthenticated){
    return <LoginButton/>;
  }
  return (
    <Router >
        <Drawer></Drawer>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Guide" element={<Guide/>}/>
        </Routes> 
    </Router>
  ); 
}

export default App;
