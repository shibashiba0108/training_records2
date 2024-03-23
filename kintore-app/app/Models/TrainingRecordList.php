<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrainingRecordList extends Model
{
    use HasFactory;

    protected $fillable = [
        "body_part",
        "exercise",
        "weight",
        "sets",
        "reps",
    ];
}