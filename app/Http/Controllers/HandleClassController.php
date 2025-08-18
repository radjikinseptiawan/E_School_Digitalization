<?php

namespace App\Http\Controllers;

use App\Models\Kelas;
use Illuminate\Http\Request;

class HandleClassController extends Controller
{
    //
    function createClass(Request $request){
            try{
        $validasi = $request->validate([
        "nama_kelas" => "required|string|max:255",
        "kelas_dimulai" => "required|date",
        "kelas_diakhiri" => "required|date",
        "penyelenggara_kelas" => "required|string|max:255",
        "aktifitas_pelatihan" => "required|string|max:255",
        "alur_seleksi" =>"required|string|max:255",
        "kouta" => "required|integer",
        "level"=> "required|string",
        "sertifikasi" => "required|string|max:255",
        "lokasi_pelatihan" => "required|string|max:255",
        "zonasi" => "required|string|max:255",
        "deskripsi" => "required|string",
    ]);

    $data = Kelas::create([
        "photo_profile",
        "nama_kelas" => $validasi["nama_kelas"],
        "kelas_dimulai" => $validasi["kelas_dimulai"],
        "kelas_diakhiri" => $validasi["kelas_diakhiri"],
        "penyelenggara_kelas" => $validasi["penyelenggara_kelas"],
        "aktifitas_pelatihan" => $validasi["aktifitas_pelatihan"],
        "alur_seleksi" => $validasi["alur_seleksi"],
        "level" => $validasi["level"],
        "kouta" => $validasi["kouta"],
        "sertifikasi" => $validasi["sertifikasi"],
        "lokasi_pelatihan" => $validasi["lokasi_pelatihan"],
        "zonasi" => $validasi["zonasi"],
        "deskripsi" => $validasi["deskripsi"]
    ]);

    return response()->json([
        "message" => "success add class",
        "data" => $data
    ],200);
    }catch(\Exception $e){
        return response()->json([
            "message" => "failed add class",
            "error" => $e->getMessage()
        ],500);
    }
    }

    function showAllClass(){
       try{
        $data = Kelas::all();
        return response()->json([
            "message" => "success getting class data",
            "data" => $data
        ]);
       }catch(\Exception $e){
        return response()->json([
            "message" => "failed getting class data",
            "error"=> $e->getMessage()
        ]);
       }
    }

    function findOne($id){
        try{
            $data = Kelas::find($id);
            return response()->json([
                "message" => "succcess getting data",
                "data" => $data
            ]);
        }catch(\Exception $e){
            return response()->json([
                "message" => "failed error class data",
                "error" => $e->getMessage()
            ]);
        }
    }
}
