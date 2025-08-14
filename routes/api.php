<?php

use App\Http\Controllers\GradeController;
use App\Http\Controllers\StudentController;
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




Route::post('/register-user',function(Request $request){
    try{
    $validasi = $request->validate([
        'nama_lengkap' => 'string|max:255',
        'email' => 'string|lowercase|unique:users,email',
        'password' => 'string|min:6'
    ]);

    $data = User::create([
        'nama_lengkap' => $validasi['nama_lengkap'],
        'email' => $validasi['email'],
        'password'=> Hash::make($validasi['password']),
    ]);
    
    return response()->json([
        "message" => "success add data",
        'data' => $data
    ]);

    }catch(\Exception $e){
        return response()->json([
            "message" => "failed add data",
            "error" => $e->getMessage()
        ]);
    }
});

// Route::get('/register',function(Request $request){
//     return Inertia::render('auth/refister');
// });