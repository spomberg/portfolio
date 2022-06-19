import './intro.scss'
import { KeyboardArrowDown } from '@material-ui/icons';
import Typewriter from 'typewriter-effect';
import profilePhoto from '../../assets/images/profile-image.png'

export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src={profilePhoto} alt="profile" />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi, there, I'm</h2>
          <h1>Marcos Spomberg</h1>
          <h3>
            <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('Web Developer')
                    .start();
                }}
            />
          </h3>
        </div>
        <a href="#about">
          <KeyboardArrowDown className="downArrow" />
        </a>
      </div>
    </div>
  )
}
