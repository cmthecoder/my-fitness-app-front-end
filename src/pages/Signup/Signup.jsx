import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className='w-full h-screen flex justify-center items-center flex-col'>
      <h1 className='mb-10 sm:text-3xl text-xl'>Sign Up</h1>
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default Signup
