import { Link } from 'react-router-dom'

const WorkoutCard = ({workout, handleDeleteWorkout}) => {
  return (
    <div className='bg-[#f5fffa] ml-3 border-2 border-black m-3'>
      <span className='bg-[#f5fffa] flex justify-end mr-2 cursor-pointer' onClick={() => handleDeleteWorkout(workout._id)}>X</span>
      <Link to={`/workout/${workout._id}/edit`} state={workout}>
        <div className='bg-[#f5fffa] ml-2 text-xl'>Workout: {workout.name}</div>
        <div className='bg-[#f5fffa] ml-2 text-xl'>Weight: {workout.weight} lbs</div>
        <div className='bg-[#f5fffa] ml-2 text-xl'>Reps: {workout.reps}</div>
      </Link>
    </div>
  )
}

export default WorkoutCard