<?php

namespace App\Http\Controllers\Record;

use App\Http\Controllers\Controller;
use App\Models\TrainingRecord;
use Illuminate\Http\Request;

class RecordController extends Controller
{
    public function postRecord(Request $request){
        //dd($request['exercise']);
            $record = new TrainingRecord();
        $result = $record->fill([
            "body_part" => $request['body_part'],
            "exercise_name" => $request['exercise'],
            "weight" => $request['weight'],
            "sets" => $request['sets'],
            "reps" => $request['reps'], 
            'userId'=> $request['userId'],
        ])
        ->save();
    }

}
