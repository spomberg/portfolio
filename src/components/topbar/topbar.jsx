import './topbar.scss'
import { Email, Phone, Menu, Close } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>MS</a>
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