import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

const ChangePasswordForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    pw: '',
    newPw: '',
    newPwConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.changePassword(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { pw, newPw, newPwConf } = formData

  const isFormInvalid = () => {
    return !(pw && newPw && newPw === newPwConf)
  }

  return (
    <div>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className='flex flex-col border-2 border-black lg:p-16 p-6 text-2xl'
      >
        <div className='mb-4 flex flex-col'>
          <label htmlFor="password" className='mr-2 sm:text-2xl text-xl flex justify-center'>
            Current Password:
          </label>
          <input
            type="password"
            autoComplete="off"
            className='border-2 border-black rounded-md w-50 pl-1'
            value={pw}
            name="pw"
            onChange={handleChange}
          />
        </div>
        <div className='mb-4 flex flex-col'>
          <label htmlFor="newPassword" className='mr-2 sm:text-2xl text-xl flex justify-center'>
            New Password:
          </label>
          <input
            type="password"
            autoComplete="off"
            className='border-2 border-black rounded-md w-50 pl-1'
            value={newPw}
            name="newPw"
            onChange={handleChange}
          />
        </div>
        <div className='mb-4 flex flex-col'>
          <label htmlFor="newPasswordConf" className='mr-2 sm:text-2xl text-xl flex justify-center'>
            Confirm New Password:
          </label>
          <input
            type="password"
            autoComplete="off"
            className='border-2 border-black rounded-md w-50 pl-1'
            value={newPwConf}
            name="newPwConf"
            onChange={handleChange}
          />
        </div>
        <div className='flex  flex-col justify-center items-center mt-2 pt-2 gap-2'>
          <button disabled={isFormInvalid()} className='border-2 border-black rounded-lg p-1 text-white bg-black text-sm'>
            Change Password
          </button>
          <Link to="/">
            <button className='border-2 border-black rounded-lg p-1 text-white bg-black text-sm'>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default ChangePasswordForm
