import style from '../styles/navbar.module.css'
//import logo from '../icons/logo.jpg'
import SearchIcon from "@mui/icons-material/Search";
import Sun from "@mui/icons-material/WbSunnyOutlined";
import Moon from "@mui/icons-material/DarkModeOutlined";


function Navbar(){
    return (
      <div className={style.navbar}>
        <div className = {style.nameLogo}>
          <img src="/icons/logo.jpg" alt="" className={style.logo} />
          <h1 className = {style.name}>blogr</h1>
        </div>
        <div className = {style.searchBar}>
          <SearchIcon/>
          <input type='text' placeholder = 'Search For Tags, people, articles and many more'/>
        </div>
        <div className = {style.iconDiv}>
          <Sun />
          <img src = '/icons/facebook.png' alt = '' className = {style.socials}/>
          <img src = '/icons/twitter.png' alt = '' className = {style.socials}/>
          <img src = '/icons/github.jpg' alt = '' className = {style.socials}/>
        </div>
      </div>
    );
}

export default Navbar