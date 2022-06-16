import style from '../styles/sidebar.module.css'
// import Notifs from "@mui/icons-material/NotificationsActiveOutlined";
// import Earth from "@mui/icons-material/PublicOutlined";
import Profile from "@mui/icons-material/AccountCircle";
import Feed from "@mui/icons-material/RssFeed";
import Explore from "@mui/icons-material/Explore";
import ReadMore from "@mui/icons-material/ReadMore";

function Sidebar(){
    return(
        <div className = {style.sidebar}>
            <div className = {style.top}>
                <div className = {style.menuDiv}>
                    <Profile className = {style.icon}/>
                    <h3>Profile</h3>
                </div>
                <div className = {style.menuDiv}>
                    <Feed className = {style.icon}/>
                    <h3>Feed</h3>
                </div>
                <div className = {style.menuDiv}>
                    <Explore className = {style.icon}/>
                    <h3>Explore</h3>
                </div>
                <div className = {style.menuDiv}>
                    <ReadMore className = {style.icon}/>
                    <h3>Read More</h3>
                </div>
                
            </div>
            <div className = {style.bottom}>
			<h1>#Technology</h1>
			<h1>#Literature</h1>
			<h1>#Hobbies</h1>
			<h1>#General</h1>
			<h1>#Computers</h1>
			<h1>#Psychology</h1>
			<h1>#Lifestyle</h1>
			<h1>#Real Estate</h1>
			<h1>#Medicine</h1>
			<h1>#Cryprocurrencies</h1>
			</div>
        </div>
    )
}

export default Sidebar;