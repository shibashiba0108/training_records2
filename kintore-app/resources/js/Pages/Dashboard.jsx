import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">MyPage</h2>}
        >
            <Head title="Dashboard" />

            <div className="p-8">
                <div className="max-w-48 mx-auto">
                    <div className="bg-sky-300 shadow-sm sm:rounded-md">
                        <div className="p-6 text-gray-900">
                            <Link href="/trainingrecords">TrainingRecords</Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
