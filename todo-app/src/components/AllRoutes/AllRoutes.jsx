import { useSelector } from "react-redux"
import { Route, Routes } from "react-router"
import { AllTasks } from "../../pages/AllTasks/AllTasks"
import { CreateTask } from "../../pages/CreateTask/CreateTask"
import { Done } from "../../pages/Done/Done"
import { Home } from "../../pages/Home/Home"
import { InProgress } from "../../pages/InProgress/InProgress"
import { Login } from "../../pages/Login/Login"
import { Profile } from "../../pages/Profile/Profile"
import { Register } from "../../pages/Register/Register"
import "./AllRoutes.css"

export const AllRoutes = () => {
  const {loggedInUser} = useSelector((state)=>state)

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/profile" element={ loggedInUser!==null ? <Profile /> : <Login/>}></Route>
      <Route path="/alltasks" element={loggedInUser ?<AllTasks />: <Login/>}></Route>
      <Route path="/progress" element={loggedInUser ?<InProgress />: <Login/>}></Route>
      <Route path="/done" element={loggedInUser ?<Done />: <Login/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/createtask" element={loggedInUser ? <CreateTask/> : <Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
  )
}
