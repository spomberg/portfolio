import './about.scss';
import { aboutMe } from '../../data';
import { GitHub, LinkedIn, KeyboardArrowDown, KeyboardArrowUp, LocationOn } from '@material-ui/icons';
import Card from "react-bootstrap/Card";
import photo from "../../assets/images/photo-bg.webp";
import html from '../../assets/images/html5-icon.png';
import react from '../../assets/images/react-js.png';
import sql from '../../assets/images/sql.png';
import node from '../../assets/images/nodejs.png';
import typescript from '../../assets/images/typescript.png';
import aws from '../../assets/images/amazon-web-services-logo.png';
import mongoDB from '../../assets/images/mongodb.svg';

export default function About() {
  return (
    <div className='about' id='about'>
      <a href="#intro">
        <KeyboardArrowUp className='up-arrow'/>
      </a>
      <Card>
        <div className='sidebar'>
          <h3>Marcos Spomberg</h3>
          <img src={photo} alt="profile" />
          <h4>Full-Stack Web Developer</h4>
          <div className='social-media-links'>
            <a href="https://github.com/spomberg" target="_blank" rel="noreferrer">
              <GitHub id='github-icon' className='icon'/>
            </a>
            <a href='https://linkedin.com/in/marcos-spomberg' target="_blank" rel="noreferrer">
              <LinkedIn id='linkedin-icon' className='icon'/>
            </a>
          </div>
          <span>
            <LocationOn />Toronto, ON
          </span>
        </div>
        <Card.Body>
          <Card.Title>About Me</Card.Title>
          <Card.Text>{aboutMe.text}</Card.Text>
          <Card.Title className='skills-title'>Skills</Card.Title>
          <Card.Text>{aboutMe.skills}</Card.Text>
          <div className="skill-icons">
            <img src={typescript} alt="typescript icon" />
            <img src={react} alt="react icon" />
            <img src={aws} alt="aws icon" />
            <img src={node} alt="node icon" />
            <img src={sql} alt="sql icon" />
            <img src={mongoDB} alt="mongoDB icon" />
            <img src={html} alt="html icon" />
          </div>
        </Card.Body>
      </Card>
      <a href="#portfolio">
          <KeyboardArrowDown className="down-arrow" />
        </a>
    </div>
  )
}
