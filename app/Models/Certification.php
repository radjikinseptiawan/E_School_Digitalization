<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Certification extends Model
{
    protected $fillable = ['name'];

    public function students(){
        return $this->belongsToMany(Students::class, 'student_certification','certification_id','student_info_id');
    }
    //
}
