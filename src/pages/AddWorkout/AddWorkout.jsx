import { useState } from "react"

const AddWorkout = (props) => {

  const [form, setForm] = useState({
    name: '',
    weight: '',
    reps: ''
  })

  const handleChange = ({target}) => {
    setForm({...form, [target.name] : target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddWorkout(form)
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col border-2 border-black p-10 lg:mx-60 bg-[#f5fffa]'
      >
        <div>
          <label htmlFor="name-input" className='text-lg flex justify-center'>Workout:</label>
          <input
            type="text"
            required
            autoComplete="off"
            name="name"
            value={form.name}
            placeholder='Bench Press'
            onChange={handleChange}
            className='border-2 border-black rounded-md lg:w-full pl-1'
          />
        </div>
        <div>
          <label htmlFor="weight-input" className='text-lg flex justify-center'>Weight:</label>
          <input
            type="number"
            required
            autoComplete="off"
            name="weight"
            value={form.weight}
            placeholder='200 lbs'
            onChange={handleChange}
            className='border-2 border-black rounded-md lg:w-full mt-2 pl-1'
          />
        </div>
        <div>
          <label htmlFor="reps-input" className='text-lg flex justify-center'>Reps:</label>
          <input
            type="number"
            required
            autoComplete="off"
            name="reps"
            value={form.reps}
            placeholder='10'
            onChange={handleChange}
            className='border-2 border-black rounded-md lg:w-full mt-2 pl-1'
          />
        </div>
        <div className='flex justify-center items-center mt-2 pt-2 gap-2'>
          <button type="submit" className='border-2 border-black rounded-lg p-1 text-white bg-black'>Add Workout</button>
        </div>
      </form>
    </div>
  )
}

export default AddWorkout