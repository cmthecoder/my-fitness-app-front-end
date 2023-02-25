import Logo from '../../assets/fittwo.png'

const Landing = ({ user }) => {
  return (
    <main className='flex items-center flex-col'>
      <img src={Logo} alt="workout app logo" />
      <h1>hello, {user ? user.name : 'friend'}</h1>
    </main>
  )
}

export default Landing
