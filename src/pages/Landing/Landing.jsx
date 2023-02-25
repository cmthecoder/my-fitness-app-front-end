const Landing = ({ user }) => {
  return (
    <main className='flex items-center flex-col'>
      <h1>hello, {user ? user.name : 'friend'}</h1>
    </main>
  )
}

export default Landing
