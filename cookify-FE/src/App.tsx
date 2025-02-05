import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Login from "./assets/components/login/Login"
import UserPage from "./assets/components/home/UserPage"
import Register from "./assets/components/login/Register"
import ChefPage from "./assets/components/home/ChefPage"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/user/:userID" element={<UserPage/>}/>
          <Route path="/chef/:userID" element={<ChefPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
