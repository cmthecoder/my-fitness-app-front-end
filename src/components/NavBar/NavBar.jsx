import { Link } from 'react-router-dom'
// import NavLogo from '../../assets/thefit.png'

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
      <div className='fixed w-full h-[80px] flex justify-end items-center pr-2 m-0 border-b-4 border-[#d42719]'>
        <div>
          <ul className='flex w-full gap-2'>
            <li className='border-4 border-black text-white bg-black rounded-xl p-1 hover:bg-white hover:text-black'><Link to="/login">Log In</Link></li>
            <li className='border-4 border-black text-white bg-black rounded-xl p-1 hover:bg-white hover:text-black'><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>
      </div>
      }
    </>
  )
}

export default NavBar
