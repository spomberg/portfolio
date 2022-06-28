import './topbar.scss'
import { GitHub, LinkedIn, Email, Phone, Menu, Close } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>MS</a>
          <div className='item-container'>
            <a href='https://github.com/spomberg' target="_blank" rel="noreferrer">
              <GitHub className='topbar-icon'/>/spomberg
            </a>
          </div>
          <div className='item-container'>
            <a href='https://linkedin.com/in/marcos-spomberg' target="_blank" rel="noreferrer">
              <LinkedIn className='topbar-icon'/>/marcos-spomberg
            </a>
          </div>
          <div className='item-container'>
            <a href='https://resume.creddle.io/resume/ficw6ujhr3l' target="_blank" rel="noreferrer">
              <span className='topbar-icon'>CV</span>
              Resume
            </a>
          </div>
          <div className='item-container'>
            <a href='mailto:marcosspomberg@gmail.com'>
              <Email className='topbar-icon'/>
              marcosspomberg@gmail.com
            </a>
          </div>
          <div className='item-container'>
            <Phone className='topbar-icon'/>
            <span>647-807-9640</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburguer' onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className='menu-icon'/>
            <Close className='close-icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}
