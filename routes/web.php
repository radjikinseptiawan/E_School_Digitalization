<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

Route::get('dashboard',function(){
    return Inertia::render('dashboard');
})->name('dashboard');

Route::get('class-lobby',function(){
    return Inertia::render('class-lobby/class');
})->name("class-lobby");

Route::get('materi',function(){
    return Inertia::render('class-lobby/materi');
})->name('materi');


Route::get('profile',function(){
    return Inertia::render(('profile'));
})->name('profile');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
