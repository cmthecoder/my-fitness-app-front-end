import LandingLogo from '../../assets/fittwo.png'

const Landing = ({ user }) => {
  return (
    <div className='w-full h-screen'>
      {/* random quotes */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <h1 className='sm:text-3xl text-xl font-medium'>{user ? '' : 'Welcome to the,'}</h1>
        <img src={LandingLogo} alt="the fit logo" style={{width:'530px'}}/>
        {/* <div> random quotes go here</div> */}
      </div>
    </div>
  )
}

export default Landing
