import { useSelector } from "react-redux"
import "./Profile.css"

export const Profile = () => {
    const {loggedInUser} = useSelector((state)=>state)

    return (
        <div className="profile">
            <p>Email : {loggedInUser.email}</p>
            <p>Name : {loggedInUser.name}</p>
        </div>
    )
}
