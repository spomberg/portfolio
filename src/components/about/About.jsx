import './about.scss';
import { aboutMe } from '../../data';
import photo from '../../assets/images/photo.jpg';
import javascript from '../../assets/images/javascript-icon.png';
import html from '../../assets/images/html5-icon.png';

export default function About() {
  return (
    <div className="about" id="about">
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
          </div>
        </div>
      </div>
    </div>
  )
}
