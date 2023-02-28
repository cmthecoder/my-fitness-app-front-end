import LandingLogo from '../../assets/fittwo.png'

const Landing = ({ user }) => {
  return (
    <div className='w-full h-screen'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <h1 className='sm:text-3xl text-xl font-medium'>{user ? '' : 'Welcome'}</h1>
        <img src={LandingLogo} alt="the fit logo" style={{width:'530px'}}/>
        {/* <div> random motivational quotes go here</div> */}
      </div>
    </div>
  )
}

export default Landing
