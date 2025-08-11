<?php

namespace App\Http\Controllers;

use App\Models\ClassModel;
use App\Models\StudentClass;
use Illuminate\Http\Request;

class GradeController extends Controller
{
    //
    public function createGrade(Request $request){
    try{
    $validasi = $request->validate([
    'class_name'   => 'required|string|max:255',
    'teacher_name' => 'required|string|max:255', 
    'semester'     => 'required|in:odd,even',
    ]);

    $data = ClassModel::create([
        'class_name' => $validasi['class_name'],
        'teacher_name' => $validasi['teacher_name'],
        'semester' => $validasi['semester']
    ]);

    return response()->json([
        'message' => 'success add class',
        'data' => $data
    ]);
    }catch(\Exception $e){
        return response()->json([
            'message' => 'something wrong!',
            'error' => $e->getMessage()
        ],500);
    }
  }

  public function showAllGrade(){
    try{
    $data = ClassModel::all();
    return response()->json([
        'message' => 'success fetching data',
        'data' => $data
    ]);
    }catch(\Exception $e){
        return response()->json([
            'message' => 'something error!',
            'error' => $e->getMessage()
        ]);
    }
  }

  public function chooseGradeForStudent(Request $request){
    try{
    $validasi = $request->validate([
        'student_id' => 'required|exists:students,id',
        'class_id' => 'required|exists:classes,id'
    ]);

    $data = StudentClass::create([
        'student_id' => $validasi['student_id'],
        'class_id' => $validasi['class_id']
    ]);

    return response()->json([
        'message' => 'success add data',
        'data' => $data
    ],200);
    }catch(\Exception $e){
        return response()->json([
            'message' => 'something wrong',
            'error' => $e->getMessage()
        ],500);
    }
  }

  public function showClassMember(){
    try{
    $data = StudentClass::all();
    return response()->json([
        'message' => 'success fetching data',
        'data' => $data
    ]);
    }catch(\Exception $e){
        return response()->json([
            'message' => 'something wrong',
            'error' => $e->getMessage()
        ]);
    }
  }
}
