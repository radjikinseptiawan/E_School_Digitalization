<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClassModel extends Model
{   
    protected $table = 'classes';

     protected $fillable = [
        'class_name',
        'teacher_name',
        'semester'
    ];

    //
}
