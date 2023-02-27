import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })
  // const [photoData, setPhotoData] = useState({})

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // const handleChangePhoto = (evt) => {
  //   setPhotoData({ photo: evt.target.files[0] })
  // }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData, 
        // photoData.photo
        )
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <div>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className='flex flex-col border-2 border-black p-3'
      >
        <div className='mb-4'>
          <label htmlFor="name" className='mr-2 text-lg inline-block w-20'>Name</label>
          <input
            type="text"
            autoComplete="off"
            className='border-2 border-black rounded-md w-52 pl-1'
            value={name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="email" className='mr-2 text-lg inline-block w-20'>Email</label>
          <input
            type="text"
            autoComplete="off"
            className='border-2 border-black rounded-md w-52 pl-1'
            value={email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="password" className='mr-2 text-lg inline-block w-20'>Password</label>
          <input
            type="password"
            autoComplete="off"
            className='border-2 border-black rounded-md w-52 pl-1'
            value={password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="confirm" className='mr-2 text-lg inline-block w-20'>
            Confirm Password
          </label>
          <input
            type="password"
            autoComplete="off"
            className='border-2 border-black rounded-md w-52 pl-1'
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
        </div>
        {/* <div className='mb-4'>
          <label htmlFor="photo-upload" className='mr-2'>
            Upload Photo
          </label>
          <input
            type="file"
            id="photo-upload"
            name="photo"
            onChange={handleChangePhoto}
          />
        </div> */}
        <div className='flex justify-center items-center mt-2 pt-2 gap-2'>
          <button disabled={isFormInvalid()} className='border-2 border-black rounded-lg p-1 text-white bg-black'>
            Sign Up
          </button>
          <Link to="/">
            <button className='border-2 border-black rounded-lg p-1 text-white bg-black'>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SignupForm
