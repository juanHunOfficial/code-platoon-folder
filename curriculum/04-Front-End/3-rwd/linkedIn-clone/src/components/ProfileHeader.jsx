import CoverPhoto from "./CoverPhoto"
import ProfilePhoto from "./ProfilePhoto"
import ProfileInfo from "./ProfileInfo"
import "./components-styles.css"

function ProfileHeader () {
    return(
        <div id="profile-header-container">
            <CoverPhoto/>
            <ProfilePhoto/>
            <ProfileInfo/>
        </div>
    )
}

export default ProfileHeader