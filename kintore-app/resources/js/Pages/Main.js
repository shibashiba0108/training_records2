import React, { useState } from 'react';
import TrainingRecords from './TrainingRecords';
import TrainingRecordsList from './TrainingRecordsList';
import './Main.css';

function Main() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <div className="App">
      <h1>My Workout Portfolio</h1>
      <TrainingRecords addWorkout={addWorkout} />
      <TrainingRecordsList workouts={workouts} />
    </div>
  );
}

export default Main;
