import React from 'react';
import Layout from '../Layouts/Layout'
import { Head } from '@inertiajs/react'

function TrainingRecordsList({ workouts }) {
    return (
        <Layout>
         <Head title="トレーニング記録" />
          <ul>
           {workouts.map((workout, index) => (
           <li key={index}>
            {workout.body_part} - {workout.exercise} - {workout.weight}kg - {workout.sets} sets x {workout.reps} reps
           </li>
           ))}
          </ul>
      </Layout>
    );
  }

  export default TrainingRecordsList;