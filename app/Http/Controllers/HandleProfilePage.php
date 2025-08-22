<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use App\Service\PhotoService as ServicePhotoService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HandleProfilePage extends Controller
{
public function showProfileEdit($id)
{
    $data = User::where("user_id",$id)->first();
    $profile = Profile::where("user_id",$data->user_id)->first();

    return Inertia::render("main-route/profile/profileEdit", [
        "data" => $data,
        "profile" => $profile
    ]);
}

public function updateProfileUser(Request $request,$id, ServicePhotoService $photoService){
    try{
    $user = User::where("user_id",$id)->firstorFail();
    $profile = Profile::where("user_id",$user->user_id)->first();

    $validasi = $request->validate([
        "nama_lengkap"   => "nullable|string",
        "domisili"       => "nullable|string",
        "tanggal_lahir"  => "nullable|string",
        "email"          => "required|string|email",
        "nomor_telepon"  => ["nullable","regex:/^(\+62|62|0)8[1-9][0-9]{6,11}$/"],
        "photo_profile"  => "nullable|image|mimes:jpg,jpeg,png|max:3000"
    ]);
    
    $user->update([
        "nama_lengkap" => $validasi["nama_lengkap"] ?? $user->nama_lengkap,
        "email" => $validasi["email"] ?? $user->email,
    ]);

    $path = $photoService->uploadImage('photo_profile');

    if($profile){
        $profile->update([
        "domisili" => $validasi["domisili"] ?? $profile->domisili,
        "tanggal_lahir" => $validasi["tanggal_lahir"] ?? $profile->tanggal_lahir,
        "nomor_telepon" => $validasi["nomor_telepon"] ?? $profile->nomor_telepon ,
    ]);
    }
    
    if($path){
        $profile->update(['photo_profile' => $path]);
    }
    return redirect()->route('profile');
        
    }catch(\Exception $e){
        return back()->withErrors([
            "messagedata" => $e->getMessage()
        ]);
    }
}

}
