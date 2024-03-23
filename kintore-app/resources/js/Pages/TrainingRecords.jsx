import { useState } from 'react';
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import RecordRepository from '@/repositories/record_repository';
import TrainingRecordsList from './TrainingRecordsList';

export default function TrainingRecords({ auth }) {
    
    const [body_part, setBody_part] = useState('');
    const [exercise, setExercise] = useState('');
    const [weight, setWeight] = useState('Weight');
    const [sets, setSets] = useState('Sets');
    const [reps, setReps] = useState('Reps');
    const [total,setTotal] = useState({});

    const handleSubmit = (event) => {
        //ページのリローディング機能を無くす
        event.preventDefault()
        setTotal({
            body_part: body_part,
            exercise: exercise,
            weight: weight,
            sets: sets,
            reps: reps,
        })
        const params = {
            body_part: body_part,
            exercise: exercise,
            weight: weight,
            sets: sets,
            reps: reps,
            userid: auth.user.id,
        }
        postRecord(params);
    }
console.log(auth.user.id);
    // API
    // 記録保存
    const postRecord = async (params) => {
        await RecordRepository.postRecord(params)
            .then(data => {
                console.log(params)
            }).catch(err => {
                alert('記録の保存に失敗しました。')
                console.log(err)
            }).finally(() => {
            })
            localStorage.setItem('userId','shiba')
    }

    return (
        <Layout>
            <Head title="トレーニング記録" />
                            <form onSubmit={handleSubmit}>
                                {/* 部位 */}
                                <input
                                    type="text"
                                    placeholder="Body_part"
                                    value={body_part}
                                    onChange={(e) => setBody_part(e.target.value)}
                                />
                                {/* 種目 */}
                                <input
                                    type="text"
                                    placeholder="Exercise"
                                    value={exercise}
                                    onChange={(e) => setExercise(e.target.value)}
                                />
                                {/* 重さ */}
                                <input
                                    type="number"
                                    placeholder="Weight"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                />
                                {/* セット数 */}
                                <input
                                    type="number"
                                    placeholder="Sets"
                                    value={sets}
                                    onChange={(e) => setSets(e.target.value)}
                                />
                                {/* 回数 */}
                                <input
                                    type="number"
                                    placeholder="Reps"
                                    value={reps}
                                    onChange={(e) => setReps(e.target.value)}
                                />
                                <button type="submit">トレーニングを記録</button>
                                {/* <p>{auth.user}</p> */}
                            </form>            
        </Layout>
    );
}