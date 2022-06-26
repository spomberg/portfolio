import './about.scss';
import { aboutMe } from '../../data';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import Card from "react-bootstrap/Card";
import photo from "../../assets/images/photo-bg.jpg";
import javascript from '../../assets/images/javascript-icon.png';
import html from '../../assets/images/html5-icon.png';
import sass from '../../assets/images/sass.png';
import react from '../../assets/images/react-js.png';
import sql from '../../assets/images/sql.png';
import ruby from '../../assets/images/ruby-on-rails.png';
import node from '../../assets/images/nodejs.png'

export default function About() {
  return (
    <div className="about" id="about">
      <a href="#intro">
        <KeyboardArrowUp className="upArrow" />
      </a>
      <Card>
        <div className='profile-photo'>
          <img src={photo} alt="profile" />
        </div>
        <Card.Body>
          <Card.Title>About Me</Card.Title>
          <Card.Text>{aboutMe.text}</Card.Text>
          <Card.Title>Skills</Card.Title>
          <Card.Text>{aboutMe.skills}</Card.Text>
          <div className="skill-icons">
            <img src={javascript} alt="javascript icon" />
            <img src={node} alt="node icon" />
            <img src={react} alt="react icon" />
            <img src={sql} alt="sql icon" />
            <img src={html} alt="html icon" />
            <img src={sass} alt="sass icon" />
            <img src={ruby} alt="ruby icon" />
          </div>
        </Card.Body>
      </Card>
      <a href="#portfolio">
          <KeyboardArrowDown className="downArrow" />
        </a>
    </div>
  )
}
