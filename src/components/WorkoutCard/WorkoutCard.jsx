import styles from './WorkoutCard.module.css'

const WorkoutCard = ({workout}) => {
  return (
    <div className='card-container'>
      <div>{workout.name}</div>
      <div>
        <div>{workout.weight}</div>
        <div>{workout.reps}</div>
      </div>
    </div>
  )
}

export default WorkoutCard