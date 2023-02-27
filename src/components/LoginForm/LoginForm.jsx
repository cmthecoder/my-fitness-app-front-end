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
        className='flex flex-col border-2 border-black p-3'
      >
        <div>
          <label htmlFor="email" className='mr-2 text-lg inline-block w-20'>Email:</label>
          <input
            type="text"
            autoComplete="off"
            className='border-2 border-black rounded-md w-52 pl-1'
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" className='mr-2 text-lg inline-block w-20'>Password:</label>
          <input
            type="password"
            autoComplete="off"
            className='border-2 border-black rounded-md w-52 mt-2 pl-1'
            value={formData.pw}
            name="pw"
            onChange={handleChange}
          />
        </div>
        <div className='flex justify-center items-center mt-2 pt-2 gap-2'>
          <button className='border-2 border-black rounded-lg p-1 text-white bg-black'>Log In</button>
          <Link to="/">
            <button className='border-2 border-black rounded-lg p-1 text-white bg-black'>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
