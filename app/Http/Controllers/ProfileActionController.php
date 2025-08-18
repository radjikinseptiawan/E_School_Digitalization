<?php

namespace App\Http\Controllers;

use App\Models\Students;
use Illuminate\Http\Request;

class ProfileActionController extends Controller
{
    //

    public function classChoose(Request $request){
        $validated = $request->validate([
            'student_id' => 'required|exist:student_info,id',
            'class_id' => 'required|exist:classes,id'
        ]);

        $student = Students::findOrFail($validated['student_id']);
        
        $student->classes()->attach($validated['class_id']);

        return response()->json([
            'message' => 'kelas berhasil dipilih1',
            "student" => $student->load("classes")
        ]);
    }
}
