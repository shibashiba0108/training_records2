<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrainingRecord extends Model
{
    use HasFactory;

    protected $fillable = [
        "body_part",
        "exercise",
        "weight",
        "sets",
        "reps",
    ];

    public function TrainingRecords()
    {
        return $this->hasOne('App\Models\TrainingRecordsList');
    }
}

