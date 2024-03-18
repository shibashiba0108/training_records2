import React, { useState, useEffect } from 'react';

function TrainingRecords() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch('http://yourbackenddomain/api/training-records')
            .then(response => response.json())
            .then(data => setRecords(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div>
            <h2>筋トレ記録</h2>
            <table>
                <thead>
                    <tr>
                        <th>部位名</th>
                        <th>種目名</th>
                        <th>重さ</th>
                        <th>セット数</th>
                        <th>レップ数</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record, index) => (
                        <tr key={index}>
                            <td>{record.body_part}</td>
                            <td>{record.exercise_name}</td>
                            <td>{record.weight}</td>
                            <td>{record.sets}</td>
                            <td>{record.reps}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TrainingRecords;
