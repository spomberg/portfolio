import './intro.scss'
import { KeyboardArrowDown } from '@material-ui/icons';

export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src="assets/profile-image.png" alt="" />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi, there, I'm</h2>
          <h1>Marcos Spomberg</h1>
          <h3>Web Developer</h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDown />
        </a>
      </div>
    </div>
  )
}
