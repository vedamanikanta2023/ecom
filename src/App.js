import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { RequireAuth } from './Components/Authentication/RequireAuth';
import {  useAuth } from './Components/Authentication/Auth';
import {Button} from "@mui/material"
import Todos from './Components/Todos/todos';
import WeatherDashboard from './Components/WeatherDashBoard/dashBoard';
import CommonPage from './Components/commonPage';

function App() {
  const auth = useAuth();
  const navigate = useNavigate();

  const login=()=>{
    auth.login(true);
    navigate("/");
  }

  return (
    <div className="App">
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
              <CommonPage />
          </RequireAuth>} />
          <Route exact path="/dashboard" element={
          <RequireAuth>
              <WeatherDashboard goback={login} />
          </RequireAuth>} />
          <Route exact path="/todo" element={
          <RequireAuth>
              <Todos goback={login} />
          </RequireAuth>} />
        </Routes>
    </div>
  );
}

export default App;
