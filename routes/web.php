<?php

use App\Http\Controllers\HandleProfilePage;
use App\Http\Controllers\HandleUserIdentification;
use App\Http\Middleware\HandleAuthentication;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');



Route::middleware([HandleAuthentication::class])->group(function(){
    
    Route::get('dashboard',[HandleUserIdentification::class,"dashboard"])->name('dashboard');
    Route::get('class-lobby/{id}',[HandleUserIdentification::class,"classLobby"])->name("classLobby");

    Route::get('materi',[HandleUserIdentification::class,"materi"])->name("materi");
    Route::get("pengumuman",[HandleUserIdentification::class,"pengumuman"])->name("pengumuman");
    Route::get("maganglowongankerja",[HandleUserIdentification::class,"magangLowongan"])->name("lowongan&magang");
    Route::get("kelas",[HandleUserIdentification::class,"kelas"])->name("kelas");
    Route::get("galeri",[HandleUserIdentification::class,"sertifikasi"])->name("sertifikasi");

    Route::get('profile',[HandleUserIdentification::class,"profile"])->name("profile");
    Route::get("profile-edit/{id}",[HandleProfilePage::class,"showProfileEdit"]);
    Route::post("profile-edit/{id}",[HandleProfilePage::class,"updateProfileUser"])->name("photo.update");
})->name("main-containt-pages");

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
