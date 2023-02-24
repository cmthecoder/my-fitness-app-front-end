import { Link } from 'react-router-dom'
import styles from './WorkoutCard.module.css'

const WorkoutCard = ({workout, handleDeleteWorkout}) => {
  return (
    <div className='card-container'>
      <span onClick={() => handleDeleteWorkout(workout._id)}>X</span>
      <Link to={`/workout/${workout._id}/edit`} state={workout}>
        <div>{workout.name}</div>
        <div>
          <div>{workout.weight}</div>
          <div>{workout.reps}</div>
        </div>
      </Link>
    </div>
  )
}

export default WorkoutCard