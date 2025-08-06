import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from './components/Dashboard';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import TransferMoney from './pages/TransferMoney';

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignupPage />}/>
      <Route path='/signin' element={<SigninPage />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/transfer' element={<TransferMoney />}/>
    </Routes>
  </BrowserRouter>
  );
}