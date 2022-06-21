import './about.scss';
import { aboutMe } from '../../data';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import photo from '../../assets/images/photo.jpg';
import javascript from '../../assets/images/javascript-icon.png';
import html from '../../assets/images/html5-icon.png';
import sass from '../../assets/images/sass.png';
import react from '../../assets/images/react-js.png';
import sql from '../../assets/images/sql.png';
import ruby from '../../assets/images/ruby-on-rails.png';

export default function About() {
  return (
    <div className="about" id="about">
      <a href="#intro">
          <KeyboardArrowUp className="upArrow" />
        </a>
      <div className="wrapper">
        <div className="left">
          <img src={photo} alt="Marcos" />
        </div>
        <div className="right">
          <div className="aboutMeText">
            <h2>About Me</h2>
            <span>{aboutMe.text}</span>
          </div>
          <div className="aboutMeSkills">
            <h2>Skills</h2>
            <span>{aboutMe.skills}</span>
          </div>
          <div className="skillIcons">
            <img src={javascript} alt="javascript icon" />
            <img src={html} alt="html icon" />
            <img src={sass} alt="sass icon" />
            <img src={react} alt="react icon" />
            <img src={sql} alt="sql icon" />
            <img src={ruby} alt="ruby icon" />
          </div>
        </div>
      </div>
      <a href="#portfolio">
          <KeyboardArrowDown className="downArrow" />
        </a>
    </div>
  )
}
