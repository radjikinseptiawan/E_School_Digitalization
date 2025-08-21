<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\Students;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth as FacadesAuth;

class HandleProfileController extends Controller
{
    //
    public function profile(Request $request,$id){
        try{
        $validate = $request->validate([
            "nomor_telepon" => "string|max:20|required",
            "domisili" => "string|max:255|required",
            "tanggal_lahir" => "string|max:255|required"
        ]);

        $user_id = User::find($id);

        $data = Profile::create([
            "user_id" => $user_id,
            "nomor_telepon" => $validate["nomor_telepon"],
            "domisili" => $validate["domisili"],
            "tanggal_lahir" => $validate["tanggal_lahir"]
        ]);

        if(!$data || !$user_id){
        return response()->json([
            "message" => "Bad Request",
            "data" => $data->error_log() 
        ],402);

        }
        return response()->json([
            "message" => "success add data",
            "data" => $data
        ],200);
        }catch(\Exception $e){
            return response()->json([
                "message" => "Failed add data",
                "data" => $e->getMessage()
            ],500);
        }
    }

    public function showAllProfile(){
        try{
            $data = Profile::all();
            return response()->json([
                "message" => "success fetching profile",
                "profile" => $data
            ],200);
        }catch(\Exception $e){
            return response()->json([
                "message" => "failed to fetching profile",
                "error" => $e->getMessage()
            ],500);
        }
    }

    public function showProfileById($id){
        try{
            $data = Profile::where("student_id",$id);

            if(!$data){
                return response()->json([
                    "message" => "user not found!",
                ],404);
            }

            return response()->json([
                "message" => "success catching the profile",
                "data" => $data
            ],200);
        }catch(\Exception $e){
            return response()->json([
                "message"=> "failed to catching the profile",
                "error" => $e->getMessage()
            ],500);
        }
    }
}
