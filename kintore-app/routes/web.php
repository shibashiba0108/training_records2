<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TrainingRecordsController;
use App\Http\Controllers\Record\ListController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\TrainingRecord;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'userId' => Auth::id(), 
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/trainingrecords','App\Http\Controllers\TrainingRecordsController@getTrainingRecords');
    Route::get('/trainingrecords', [TrainingRecordsController::class, 'getTrainingRecords'])
    ->middleware(['auth', 'verified'])->name('trainingrecords.getTrainingRecords');
    Route::get('/', function () {
        $trainingrecords = TrainingRecord::all(); // データベースからユーザーデータを取得
        return Inertia::render('/trainingrecords', ['trainingrecords' => $trainingrecords]);
    });

Route::get('/list','App\Http\Controllers\ListController@getListRecord');
    Route::get('/list', [ListController::class, 'getListRecord'])
    ->middleware(['auth', 'verified'])->name('list.getListRecord');

Route::get('/', function () {
    return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
    ]);
});

require __DIR__.'/auth.php';
