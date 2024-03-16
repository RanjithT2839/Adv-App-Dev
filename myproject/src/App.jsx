import {Routes,Route, BrowserRouter as Router} from "react-router-dom";
import './App.css'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Homepage from "./Components/Homepage";
function App() {
  

  return (
    <>
    <Router>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/home' element={<Homepage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
