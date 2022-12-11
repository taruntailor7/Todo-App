import { Route, Routes } from "react-router"
import { Home } from "../../pages/Home/Home"
import { Login } from "../../pages/Login/Login"
import "./AllRoutes.css"

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/profile" element></Route>
      <Route path="/alltasks" element></Route>
      <Route path="/personal" element></Route>
      <Route path="/official" element></Route>
      <Route path="/others" element></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  )
}
