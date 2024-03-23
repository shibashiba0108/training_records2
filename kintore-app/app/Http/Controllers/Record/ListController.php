<?php

namespace App\Http\Controllers\Record;

use App\Http\Controllers\Controller;
use App\Models\TrainingRecordList;
use Illuminate\Http\Request;

class ListController extends Controller
{
    public function getRecordList(Request $request){
        $record = TrainingRecordList::create($request->all());
            $record = new TrainingRecordList();
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
