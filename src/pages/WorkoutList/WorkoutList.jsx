import React from 'react'

const WorkoutList = ({workouts}) => {
  return (
    <div>
      {workouts.map((workout, index) => (
      <div key={index}>
        <div>{workout.name}</div>
        <div>{workout.weight}</div>
        <div>{workout.reps}</div>
      </div>
      ))}
    </div>
  )
}

export default WorkoutList