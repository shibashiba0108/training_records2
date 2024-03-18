<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TrainingRecordController extends Controller
{
    public function training_records()
    {
        return view ('training_records');
    }
}
