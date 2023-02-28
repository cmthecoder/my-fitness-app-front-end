import React from 'react'
import WorkoutCard from '../../components/WorkoutCard/WorkoutCard'
import AddWorkout from '../AddWorkout/AddWorkout'

const WorkoutList = ({workouts, handleDeleteWorkout, handleAddWorkout}) => {
  return (
    <div className='w-full h-screen items-center flex flex-col lg:grid grid-cols-2'>
      <div className='lg:grid grid-cols-1'>
      {workouts.map((workout) => (
        <WorkoutCard
          key={workout._id}
          workout={workout}
          handleDeleteWorkout={handleDeleteWorkout}
        />
        ))}
      </div>
        <AddWorkout handleAddWorkout={handleAddWorkout} />
    </div>
  )
}

export default WorkoutList