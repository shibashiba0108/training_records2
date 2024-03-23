<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Record\RecordController;
use App\Http\Controllers\Record\ListController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/trainingrecords', [Controller::class, 'index']);

Route::post('/record', [RecordController::class, 'postRecord']);
 Route::get('/record', [RecordController::class, 'postRecord']);

 Route::get('/record', [ListController::class, 'index']);