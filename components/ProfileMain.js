import style from '../styles/profilemain.module.css';

function ProfileMain(){
	return(
		<div className = {style.profileMain}>
			<div className = {style.banner}>
				<img src = '/images/cover-image.png' alt = '' className = {style.bannerImage}/>
				<img src = '/images/image.jpg' className = {style.profilePic} alt = ''/>
			</div>
			<div className = {style.profileBody}>
			<h1 className = {style.name}>John Doe</h1>
			</div>
		</div>
	)
	
}

export default ProfileMain;

