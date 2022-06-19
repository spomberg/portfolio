import './topbar.scss'
import { GitHub, LinkedIn, Email, Phone, Menu, Close } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>MS</a>
          <div className='itemContainer'>
            <GitHub/>
            <a href='https://github.com/spomberg' target="_blank" rel="noreferrer">/spomberg</a>
          </div>
          <div className='itemContainer'>
            <LinkedIn/>
            <a href='https://linkedin.com/in/marcos-spomberg' target="_blank" rel="noreferrer">/marcos-spomberg</a>
          </div>
          <div className='itemContainer'>
            <span className='cv'>CV</span>
            <a href='https://resume.creddle.io/resume/ficw6ujhr3l' target="_blank" rel="noreferrer">Resume</a>
          </div>
          <div className='itemContainer'>
            <Email/>
            <a href='mailto:marcosspomberg@gmail.com'>marcosspomberg@gmail.com</a>
          </div>
          <div className='itemContainer'>
            <Phone/>
            <span>647-807-9640</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburguer' onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className='menuIcon'/>
            <Close className='closeIcon'/>
          </div>
        </div>
      </div>
    </div>
  )
}