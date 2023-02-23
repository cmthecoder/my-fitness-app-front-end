// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import AddWorkout from './pages/AddWorkout/AddWorkout'
import EditWorkout from './pages/EditWorkout/EditWorkout'
import WorkoutDetails from './pages/WorkoutDetails/WorkoutDetails'
import WorkoutList from './pages/WorkoutList/WorkoutList'


// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as workoutsService from './services/workoutsService'
import * as profileService from './services/profileService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [workouts, setWorkouts] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  // Get all workouts

  useEffect(() => {
    const fetchAllWorkouts = async () => {
      const workoutData = await profileService.showMyWorkouts(user.profile)
      setWorkouts(workoutData)
    }

    if(user) fetchAllWorkouts()

  },[user])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/workouts"
          element={
            <ProtectedRoute user={user}>
              <WorkoutList
                workouts={workouts}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
