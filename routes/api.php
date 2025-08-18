<?php

use App\Http\Controllers\GradeController;
use App\Http\Controllers\HandleClassController;
use App\Http\Controllers\ProfileActionController;
use App\Http\Controllers\StudentController;
use App\Models\Kelas;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/students',[StudentController::class,'createStudent']);

Route::get('/students',[StudentController::class,'showAllStudent']);


Route::get('/students/{nisn}',[StudentController::class,'getDetailStudent']);

Route::delete("/students/{nisn}",[StudentController::class,'deleteStudent']);

Route::post('/class-api',[GradeController::class,'createGrade']);

Route::get('/class-api',[GradeController::class,'showAllGrade']);

Route::post('/class_choose',[GradeController::class,'chooseGradeForStudent']);

Route::get('/class_choose',[GradeController::class,'showClassMember']);



Route::post("/tambah-kelas",[HandleClassController::class,"createClass"]);
Route::get("/semua-kelas",[HandleClassController::class,"showAllClass"]);
Route::get("/semua-kelas/{id}",[HandleClassController::class,"findOne"]);
Route::post("/pilih-kelas",[ProfileActionController::class,'chooseClass']);