import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
      <div className='w-full h-[80px] flex justify-end items-center pr-2 m-0 border-b-4 border-[#d42719]'>
        <div>
          <ul className='flex items-center w-full gap-4'>
            <li><Link to='/'><span className="material-symbols-outlined lg:text-3xl text-2xl">home</span></Link></li>
            <li><Link to='/workouts'><span className="material-symbols-outlined lg:text-3xl text-2xl">exercise</span></Link></li>
            <li><Link to="/change-password"><span className="material-symbols-outlined lg:text-3xl text-2xl">lock_reset</span></Link></li>
            <li><Link to="" onClick={handleLogout}><span className="material-symbols-outlined lg:text-3xl text-2xl">logout</span></Link></li>
          </ul>
        </div>
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
