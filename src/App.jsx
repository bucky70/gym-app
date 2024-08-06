import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'

function App() {
const [workout, setWorkout] = useState(null)
const [poison,setPoison] = useState('individual')
const [goal,setGoal] = useState('strength_power')
const [muscles,setMuscles] = useState([])

function updateWorkout() {
  if (muscles.length < 1) {
    return
  }
  let newWorkout = generateWorkout({ poison, muscles, goal })
  setWorkout(newWorkout)
  console.log(newWorkout)

  window.location.href = '#workout'
}

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-cyan-900 to-slate-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App
