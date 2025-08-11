<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Students extends Model
{
    //
        protected $fillable = [
        'first_name',
        'last_name',
        'gender',
        'parent_name',
        'parent_phone',
        'enrollment_date',
        'status',
        'NISN'
    ];

}
