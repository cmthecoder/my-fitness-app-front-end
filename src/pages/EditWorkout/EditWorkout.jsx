import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const EditWorkout = (props) => {

  const { state } = useLocation()
  const [form, setForm] = useState(state)

  const handleChange = ({target}) => {
    setForm({ ...form, [target.name]: target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateWorkout(form)
  }

  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
      <h1 className='mb-10 sm:text-3xl text-xl'>Edit Workout</h1>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col border-2 border-black p-3'
      >
        <div>
          <label htmlFor="name-input" className='mr-2 text-lg inline-block w-20'>Name:</label>
          <input
            type="text"
            required
            autoComplete="off"
            name="name"
            value={form.name}
            placeholder='Bench Press'
            onChange={handleChange}
            className='border-2 border-black rounded-md w-52 pl-1'
          />
        </div>
        <div>
          <label htmlFor="weight-input" className='mr-2 text-lg inline-block w-20'>Weight:</label>
          <input
            type="number"
            required
            autoComplete="off"
            name="weight"
            value={form.weight}
            placeholder='200 lbs'
            onChange={handleChange}
            className='border-2 border-black rounded-md w-52 mt-2 pl-1'
          />
        </div>
        <div>
          <label htmlFor="reps-input" className='mr-2 text-lg inline-block w-20'>Reps:</label>
          <input
            type="number"
            required
            autoComplete="off"
            name="reps"
            value={form.reps}
            placeholder='10'
            onChange={handleChange}
            className='border-2 border-black rounded-md w-52 mt-2 pl-1'
          />
        </div>
        <div className='flex justify-center items-center mt-2 pt-2 gap-2'>
          <button type="submit" className='border-2 border-black rounded-lg p-1 text-white bg-black'>Submit</button>
        </div>
      </form>
  </div>
  )
}

export default EditWorkout