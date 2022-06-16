import './topbar.scss'
import { Email, Phone } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>logo</a>
          <div className='itemContainer'>
            <Email/>
            <span>marcosspomberg@gmail.com</span>
          </div>
          <div className='itemContainer'>
            <Phone/>
            <span>647-807-9640</span>
          </div>
        </div>
        <div className='right'>
          
        </div>
      </div>
    </div>
  )
}