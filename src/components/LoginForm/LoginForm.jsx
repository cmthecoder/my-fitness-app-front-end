import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <div>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className='flex flex-col border-2 border-black p-16 lg:p-12'
      >
        <div className='flex flex-col justify-center items-center'>
          <label htmlFor="email" className='ml-6 lg:mr-0 text-2xl inline-block w-20 lg:text-2xl'>Email:</label>
          <input
            type="text"
            autoComplete="off"
            className='border-2 border-black rounded-md w-50 pl-1 lg:text-xl text-lg'
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <label htmlFor="password" className='mr-2 lg:mr-8 text-2xl inline-block w-20 lg:text-2xl'>Password:</label>
          <input
            type="password"
            autoComplete="off"
            className='border-2 border-black rounded-md w-50 mt-2 pl-1 lg:text-xl text-lg'
            value={formData.pw}
            name="pw"
            onChange={handleChange}
          />
        </div>
        <div className='flex justify-center items-center mt-2 pt-2 gap-2'>
          <button className='border-2 border-black rounded-lg p-1 text-white bg-black'>Submit</button>
          <Link to="/">
            <button className='border-2 border-black rounded-lg p-1 text-white bg-black'>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
