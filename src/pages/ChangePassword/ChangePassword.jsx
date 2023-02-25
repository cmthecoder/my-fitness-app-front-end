import { useState } from 'react'
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm'

const ChangePassword = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className='flex items-center flex-col'>
      <h1>Change Password</h1>
      <p>{message}</p>
      <ChangePasswordForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default ChangePassword
