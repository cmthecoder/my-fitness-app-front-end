import React from 'react'
import styles from './WorkoutList.module.css'
import WorkoutCard from '../../components/WorkoutCard/WorkoutCard'

const WorkoutList = ({workouts}) => {
  return (
    <div>
      {workouts.map((workout, index) => (
      <div key={index}>
        <WorkoutCard
          key={workout._id}
          workout={workout}
        />
      </div>
      ))}
    </div>
  )
}

export default WorkoutList