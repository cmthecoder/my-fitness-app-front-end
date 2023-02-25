import React from 'react'
import WorkoutCard from '../../components/WorkoutCard/WorkoutCard'

const WorkoutList = ({workouts, handleDeleteWorkout}) => {
  return (
    <div>
      {workouts.map((workout, index) => (
      <div key={index}>
        <WorkoutCard
          key={workout._id}
          workout={workout}
          handleDeleteWorkout={handleDeleteWorkout}
        />
      </div>
      ))}
    </div>
  )
}

export default WorkoutList