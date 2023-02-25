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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name-input">Name:</label>
          <input
            type="text"
            required
            autoComplete="off"
            name="name"
            value={form.name}
            placeholder='Bench Press'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="weight-input">Weight:</label>
          <input
            type="number"
            required
            autoComplete="off"
            name="weight"
            value={form.weight}
            placeholder='200 lbs'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="reps-input">Reps:</label>
          <input
            type="number"
            required
            autoComplete="off"
            name="reps"
            value={form.reps}
            placeholder='10'
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Workout</button>
      </form>
    </div>
  )
}

export default AddWorkout