import { Route, Routes } from "react-router"
import { CreateTask } from "../../pages/CreateTask/CreateTask"
import { Home } from "../../pages/Home/Home"
import { Login } from "../../pages/Login/Login"
import { Register } from "../../pages/Register/Register"
import "./AllRoutes.css"

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/profile" element></Route>
      <Route path="/alltasks" element></Route>
      <Route path="/progress" element></Route>
      <Route path="/done" element></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/createtask" element={<CreateTask/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
  )
}
