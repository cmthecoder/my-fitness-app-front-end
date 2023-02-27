import { useState } from 'react'
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm'

const ChangePassword = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className='w-full h-screen flex justify-center items-center flex-col'>
      <h1 className='mb-10 sm:text-3xl text-xl'>Change Password</h1>
      <p>{message}</p>
      <ChangePasswordForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default ChangePassword
