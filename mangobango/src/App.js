import './App.css';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import LandingPage from './views/LandingPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/">
            <LandingPage /> 
          </Route>
          <Route path="/home">
            <LandingPage /> 
          </Route>
        </Routes>    
      </BrowserRouter> 
      Landing Page
    </div>
  );
}

export default App;
