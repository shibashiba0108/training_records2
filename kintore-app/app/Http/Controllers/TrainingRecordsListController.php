<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class TrainingRecordsListController extends Controller
{
    public function getTrainingRecordsList(Request $request){
        return Inertia::render('TrainingRecordsList', [
            'TrainingRecordsList' => $request->only(
              'bodypart',
              'exercise',
              'weight',
              'sets',
              'reps'
            ),
        ]);
    }
}

