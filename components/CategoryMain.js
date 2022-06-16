import style from '../styles/categorymain.module.css'
import Image from 'next/image'

function CategoryMain(){
	return(
	<div className= {style.categoryMain}>
	
		<div className = {style.categoryDiv}>
			<img src = {'/images/computers.png'} alt = '' className= {style.categoryImage}/>
			<h1 className = {style.categoryHeader}>Computers</h1>
		</div>
		
		<div className = {style.categoryDiv}>
			<img src = {'/images/cryptocurrencies.png'} alt = '' className= {style.categoryImage}/>
			<h1 className = {style.categoryHeader}>Cryptocurrencies</h1>
		</div>
		
		<div className = {style.categoryDiv}>
			<img src = {'/images/diy.png'} alt = '' className= {style.categoryImage}/>
			<h1 className = {style.categoryHeader}>DIY</h1>
		</div>
		
		<div className = {style.categoryDiv}>
			<img src = {'/images/fashion.png'} alt = '' className= {style.categoryImage}/>
			<h1 className = {style.categoryHeader}>Fashion</h1>
		</div>
		
		<div className = {style.categoryDiv}>
			<img src = {'/images/finance.png'} alt = '' className= {style.categoryImage}/>
			<h1 className = {style.categoryHeader}>Finance</h1>
		</div>
		
		<div className = {style.categoryDiv}>
			<img src = {'/images/fitness.png'} alt = '' className= {style.categoryImage}/>
			<h1 className = {style.categoryHeader}>Fitness</h1>
		</div>
		
		<div className = {style.categoryDiv}>
			<img src = {'/images/food.png'} alt = '' className= {style.categoryImage}/>
			<h1 className = {style.categoryHeader}>Food</h1>
		</div>
		
		<div className = {style.categoryDiv}>
			<img src = {'/images/lifestyle.png'} alt = '' className= {style.categoryImage}/>
			<h1 className = {style.categoryHeader}>Lifestyle</h1>
		</div>
		
		<div className = {style.categoryDiv}>
			<img src = {'/images/music.png'} alt = '' className= {style.categoryImage}/>
			<h1 className = {style.categoryHeader}>Music</h1>
		</div>
		
		<div className = {style.categoryDiv}>
			<img src = {'/images/personal.png'} alt = '' className= {style.categoryImage}/>
			<h1 className = {style.categoryHeader}>Personal</h1>
		</div>
		
		<div className = {style.categoryDiv}>
			<img src = {'/images/sports.png'} alt = '' className= {style.categoryImage}/>
			<h1 className = {style.categoryHeader}>Sports</h1>
		</div>
		
		<div className = {style.categoryDiv}>
			<img src = {'/images/travel.png'} alt = '' className= {style.categoryImage}/>
			<h1 className = {style.categoryHeader}>Travel</h1>
		</div>
		
	</div>
	)
}

export default CategoryMain;