<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TrainingRecordsController extends Controller
{
    public function getTrainingRecords(Request $request){
        return Inertia::render('TrainingRecords', [
            'TrainingRecords' => $request->only(
              'bodypart',
              'exercise',
              'weight',
              'sets',
              'reps'
            ),
        ]);
    }
}
