import { Link } from 'react-router-dom'

const WorkoutCard = ({workout, handleDeleteWorkout}) => {
  return (
    <div className='bg-[#f5fffa] ml-3 border-2 border-black m-3'>
      <span className='bg-[#f5fffa] flex justify-end mr-2 cursor-pointer' onClick={() => handleDeleteWorkout(workout._id)}>X</span>
      <Link to={`/workout/${workout._id}/edit`} state={workout}>
        <div className='bg-[#f5fffa] ml-2'>Workout: {workout.name}</div>
        <div className='bg-[#f5fffa] ml-2'>Weight: {workout.weight}</div>
        <div className='bg-[#f5fffa] ml-2'>Reps: {workout.reps}</div>
      </Link>
    </div>
  )
}

export default WorkoutCard