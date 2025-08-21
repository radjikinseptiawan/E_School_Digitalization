<?php

use App\Http\Controllers\GradeController;
use App\Http\Controllers\HandleClassController;
use App\Http\Controllers\HandleProfileController;
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



Route::post("/tambah-kelas",[HandleClassController::class,"createClass"]);
Route::get("/semua-kelas",[HandleClassController::class,"showAllClass"]);
Route::get("/semua-kelas/{id}",[HandleClassController::class,"findOne"]);
Route::post("/pilih-kelas",[ProfileActionController::class,'chooseClass']);


Route::get("/edit-profile",[HandleProfileController::class,"showAllProfile"]);
Route::post("/edit-profile/{id}",[HandleProfileController::class,"profile"])->middleware("auth");