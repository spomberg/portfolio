import './topbar.scss'
import { GitHub, LinkedIn, Email, Phone, Menu, Close } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>MS</a>
          <div className='itemContainer'>
            <a href='https://github.com/spomberg' target="_blank" rel="noreferrer">
              <GitHub className='topbarIcon'/>/spomberg
            </a>
          </div>
          <div className='itemContainer'>
            <a href='https://linkedin.com/in/marcos-spomberg' target="_blank" rel="noreferrer">
              <LinkedIn className='topbarIcon'/>/marcos-spomberg
            </a>
          </div>
          <div className='itemContainer'>
            <a href='https://resume.creddle.io/resume/ficw6ujhr3l' target="_blank" rel="noreferrer">
              <span className='topbarIcon'>CV</span>
              Resume
            </a>
          </div>
          <div className='itemContainer'>
            <a href='mailto:marcosspomberg@gmail.com'>
              <Email className='topbarIcon'/>
              marcosspomberg@gmail.com
            </a>
          </div>
          <div className='itemContainer'>
            <Phone className='topbarIcon'/>
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
