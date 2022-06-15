import './topbar.scss'

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>logo</a>
        </div>
        <div className='right'>
          Right
        </div>
      </div>
    </div>
  )
}