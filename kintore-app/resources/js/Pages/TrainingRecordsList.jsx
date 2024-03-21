import React from 'react';

function TrainingRecordsList({ workouts }) {
    return (
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            {workout.bodypart}-{workout.exercise} - {workout.weight}kg - {workout.sets} sets x {workout.reps} reps
          </li>
        ))}
      </ul>
    );
  }
  
  export default TrainingRecordsList;