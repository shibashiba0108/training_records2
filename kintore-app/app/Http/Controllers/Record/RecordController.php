<?php

namespace App\Http\Controllers\Record;

use App\Http\Controllers\Controller;
use App\Models\TrainingRecord;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class RecordController extends Controller
{
    public function postRecord(Request $request){
        
            $record = new TrainingRecord();
        $result = $record->fill([
            "body_part" => $request['body_part'],
            "exercise_name" => $request['exercise'],
            "weight" => $request['weight'],
            "sets" => $request['sets'],
            "reps" => $request['reps'], 
            "userid" => $request['userid'],
        ])
        ->save();
    }

}
