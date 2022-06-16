import style from '../styles/intro.module.css'

function Intro(){
    return (
      <div className={style.intro}>
        <div className={style.left}>
          <h1 className={style.text}>get your ideas out into the <b>world</b>
          </h1>
          <h1 className = {style.supportingText}>A hassle-free community for bloggers and creatives</h1>
		  <button className = {style.getStarted}>Get Started - It's free</button>
        </div>
        <div className={style.right}>
          <img src="/images/globe.png" className={style.plane} />
        </div>
      </div>
    );
}

export default Intro;