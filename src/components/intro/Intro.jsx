import './intro.scss'
import { KeyboardArrowDown } from '@material-ui/icons';
import Typewriter from 'typewriter-effect';
import profilePhoto from '../../assets/images/profile-image.webp'
import profilePhotoSmall from '../../assets/images/profile-image-small.webp';
import ProgressiveImage from "react-progressive-graceful-image";

export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <ProgressiveImage
            src={profilePhoto}
            placeholder={profilePhotoSmall}
          >
            {src => <img src={src} alt="profile" />}
          </ProgressiveImage>
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hello! I'm</h2>
          <h1>Marcos Spomberg</h1>
          <h3>
            <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('Full-Stack Web Developer')
                    .start();
                }}
            />
          </h3>
        </div>
      </div>
        <a href="#about">
          <KeyboardArrowDown className="downArrow" />
        </a>
    </div>
  )
}
