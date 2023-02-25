import { Link } from 'react-router-dom'
import Logo from '../../assets/fittwo.png'

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
      <div>
        <img src={Logo} alt="workout app logo" />
        <ul className='flex'>
          <li className='border-2'><Link to="/login">Log In</Link></li>
          <li className='border-2'><Link to="/signup">Sign Up</Link></li>
        </ul>
      </div>
      }
    </>
  )
}

export default NavBar
