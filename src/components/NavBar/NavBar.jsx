import { Link } from 'react-router-dom'
import NavLogo from '../../assets/thefit.png'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
      <div>
        <ul>
          <li><Link to='/workouts'>Workouts</Link></li>
          <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          <li><Link to="/change-password">Change Password</Link></li>
        </ul>
      </div>
      :
      <div className='fixed w-full h-[80px] flex justify-between items-center pr-2 m-0'>
        <div className='m'>
          <img src={NavLogo} alt="workout app logo" style={{width: '270px'}}/>
        </div>
        <div className='ml'>
          <ul className='flex w-full'>
            <li className='border-2'><Link to="/login">Log In</Link></li>
            <li className='border-2'><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>
      </div>
      }
    </>
  )
}

export default NavBar
