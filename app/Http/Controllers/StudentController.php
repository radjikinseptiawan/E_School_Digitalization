<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\Students;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    //
    public function showAllStudent(){
       $data = Students::all();
       return response()->json($data);
    }


    public function createStudent(Request $request){
         try{
    $validasi = $request->validate([
        'first_name' => 'required|string|max:255',
        'last_name' => 'required|string|max:255',
        'gender' => 'required|in:male,female,other',
        'parent_name'=>'required|string|max:255',
        'parent_phone'=>'required|string|max:255',
        'enrollment_date'=>'required|date',
        'status'=>'required|in:active,inactive,graduated',
        'NISN' => 'required|string|max:50'
    ]);

    $data = Students::create([
        'first_name' => $validasi['first_name'],
        'last_name'=> $validasi['last_name'],
        'gender'=> $validasi['gender'],
        'parent_name' => $validasi['parent_name'],
        'parent_phone' => $validasi['parent_phone'],
        'enrollment_date'=> $validasi['enrollment_date'],
        'status' => $validasi['status'],
        'NISN' => $validasi['NISN']
    ]);

    return response()->json([
        'message'=>'success add data',
        'data' => $data
    ],201);

   }catch(\Exception $e){
    return response()->json([
        'message'=>'failed add data',
        'error' => $e->getMessage()
    ],500);
   }
  }

  public function getDetailStudent(string $nisn){
    try{
        $student = Students::where('NISN',$nisn)->first();
        if(!$student){
            return response()->json([
                "message" => "User not found",
                "code"=>404,
            ],404);
        }
        return response()->json($student);
    }catch(\Exception $e){
        return response()->json([
            'message' => "something error, try again",
            'error' => $e->getMessage()
        ]);
    }
  }

  public function deleteStudent(string $nisn){
        try{
        $student = Students::where('NISN',$nisn)->delete();
        if(!$student){
            return response()->json([
                'message' => 'User not found',
                'code' => 404
            ],404);
        }
        return response()->json($student);
    }catch(\Exception $e){
        return response()->json([
            'message' => "something error, try again",
            'error' => $e->getMessage()
        ]);
    }
  }
}
