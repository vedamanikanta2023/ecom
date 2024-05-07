import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { RequireAuth } from './Components/Authentication/RequireAuth';
import {  useAuth } from './Components/Authentication/Auth';
import {Button} from "@mui/material"
import Todos from './Components/Todos/todos';

function App() {
  const auth = useAuth();
  const navigate = useNavigate();

  const login=()=>{
    auth.login(true);
    navigate("/");
  }
console.log("auth===>",auth);
  return (
    <div className="App">
      {/* <AuthProvider> */}
        <Routes>
          <Route exact path="login" 
          element={
          <div>
            <p>Please login</p>
            <Button onClick={login}>
              Log In
              </Button>
        </div>
      }/>
          <Route exact path="/" element={
          <RequireAuth>
            <div>
              <Todos />
            </div>
          </RequireAuth>} />
        </Routes>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
