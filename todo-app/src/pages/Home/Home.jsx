// import { useSelector } from "react-redux"
import { Calendar } from "../Calendar/Calendar"
import "./Home.css"

export const Home = () => {
    // const {token} = useSelector((state)=>state)


    return (
        <div className="home">
            <div className="todoImgDiv">
                <img className="todoImg" src="https://images-platform.99static.com/6FEQ3QgDbdc4g3IZNqc5ghil3Ac=/500x500/top/smart/99designs-contests-attachments/28/28240/attachment_28240975"  alt="" />
            </div>
            <div className="todoImgDiv">
                <img className="todoImg" src="https://static.vecteezy.com/system/resources/previews/005/419/000/non_2x/illustration-of-good-time-management-to-reach-the-target-goal-organize-schedule-people-checking-the-to-do-list-can-be-used-for-presentation-web-landing-page-apps-animation-social-media-etc-vector.jpg" alt="" />
            </div>
            <div className="todoImgDiv">
                <img className="todoImg" src="https://cdni.iconscout.com/illustration/premium/thumb/young-business-woman-working-on-todo-list-2644452-2206521.png" alt="" />
            </div>
            <div className="calender">
                <Calendar />
            </div>
        </div>
    )
}
