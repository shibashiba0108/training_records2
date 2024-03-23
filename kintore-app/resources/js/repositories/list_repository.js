export default {
    //記録一覧
    getRecordList(workouts) {
        return(
            <ul>
                {workouts.map((workout, index) => (
                    <li key={index}>
                        {workout.body_part} - {workout.exercise} - {workout.weight}kg - {workout.sets} sets x {workout.reps} reps
                    </li>
                ))}
            </ul>
       )
    }
}