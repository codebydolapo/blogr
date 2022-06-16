import style from '../styles/sectionb.module.css'

function SectionB(){
	return(
		<div className = {style.sectionb}>
			<div className = {style.review}>
				<img src = '/images/image.jpg' alt = '' className = {style.reviewImage}/>
				<div className= {style.reviewText}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ante ipsum, vel aliquam ligula finibus id. Donec suscipit ex in tortor gravida aliquet. Aliquam eu dapibus nisi. Pellentesque convallis orci sed facilisis commodo. In hac habitasse platea dictumst. Sed rhoncus molestie nibh, quis sodales eros pharetra at
					</p>
					<h1><b>Bill Gates</b> - CEO, Microsoft</h1>
					<button>Join The Community</button>
				</div>
			</div>
			<div className = {style.sectionbExp}>
				<div>
					<img src = '/images/bullseye.png'  alt = '' className = {style.columnImage}/>
					<h1 className = {style.columnHeader}>Blog On Your Personal Domain</h1>
					<p className = {style.columnParagraph}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ante ipsum, vel aliquam ligula finibus id. Donec suscipit ex in tortor gravida aliquet. Aliquam eu dapibus nisi. 
					</p>
				</div>
				<div>
					<img src = '/images/domain.jpg' alt = '' className = {style.columnImage}/>
					<h1 className = {style.columnHeader}>Blog On Your Personal Domain</h1>
					<p className = {style.columnParagraph}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ante ipsum, vel aliquam ligula finibus id. Donec suscipit ex in tortor gravida aliquet. Aliquam eu dapibus nisi. 
					</p>
				</div>
				<div>
					<img src = '/images/noads.jpg' alt = '' className = {style.columnImage}/>
					<h1 className = {style.columnHeader}>No Annoying Ads</h1>
					<p className = {style.columnParagraph}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ante ipsum, vel aliquam ligula finibus id. Donec suscipit ex in tortor gravida aliquet. Aliquam eu dapibus nisi. 
					</p>
				</div>
				
			</div>
		</div>
	)
}

export default SectionB