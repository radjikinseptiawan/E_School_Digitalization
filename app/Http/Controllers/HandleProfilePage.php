<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

public function updateProfileUser(Request $request,$id){
    $user = User::where("user_id",$id)->firstorFail();
    $profile = Profile::where("user_id",$user->user_id)->first();

    $validasi = $request->validate([
        "user_id" => $user->user_id, 
        "nama_lengkap" => "string",
        "domisili" => "string",
        "tanggal_lahir" => "string",
        "email" => "string|email",
        "nomor_telepon" => "string"
    ]);
    

    $user->update([
        "nama_lengkap" => $validasi["nama_lengkap"],
        "email" => $validasi["email"]
    ]);

    if($profile){
        $profile->update([
        "domisili" => $validasi["domisili"],
        "tanggal_lahir" => $validasi["tanggal_lahir"],
        "nomor_telepon" => $validasi["nomor_telepon"]
    ]);
    }

    return redirect()->intended(route('profile',absolute:false));
}

}
