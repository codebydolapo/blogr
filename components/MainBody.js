import style from "../styles/mainbody.module.css";
import Intro from "./Intro";
import SectionB from './SectionB'
import SectionC from './SectionC'

function MainBody() {
  return (
    <div className={style.mainbody}>
      <Intro />
	  <SectionB />
	  <SectionC />
    </div>
  );
}

export default MainBody;
