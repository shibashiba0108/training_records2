import { useState } from 'react';
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'

export default function TrainingRecords({ auth }) {
    const handleSubmit = () => {
        console.log(1);
    }
    
    const [body_part, setBody_part] = useState('Body_part');
    const [exercise, setExercise] = useState('Exercise');
    const [weight, setWeight] = useState('Weight');
    const [sets, setSets] = useState('Sets');
    const [reps, setReps] = useState('Reps');

    return (
        <Layout>
            <Head title="トレーニング記録" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
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
                                <button type="submit">トレーニングを追加</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}