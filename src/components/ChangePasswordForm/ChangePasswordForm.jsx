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
        className='flex flex-col border-2 border-black p-3'
      >
        <div className='mb-4'>
          <label htmlFor="password" className='mr-2 text-lg inline-block w-22'>
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
        <div className='mb-4'>
          <label htmlFor="newPassword" className='mr-2 text-lg inline-block w-22'>
            New Password:
          </label>
          <input
            type="password"
            autoComplete="off"
            className='border-2 border-black rounded-md w-52 pl-1'
            value={newPw}
            name="newPw"
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="newPasswordConf" className='mr-2 text-lg inline-block w-22'>
            Confirm New Password
          </label>
          <input
            type="password"
            autoComplete="off"
            className='border-2 border-black rounded-md w-52 pl-1'
            value={newPwConf}
            name="newPwConf"
            onChange={handleChange}
          />
        </div>
        <div className='flex justify-center items-center mt-2 pt-2 gap-2'>
          <button disabled={isFormInvalid()} className='border-2 border-black rounded-lg p-1 text-white bg-black'>
            Change Password
          </button>
          <Link to="/">
            <button className='border-2 border-black rounded-lg p-1 text-white bg-black'>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default ChangePasswordForm
