<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Students extends Model
{
        protected $primaryKey = "student_id";
        public $keyType = "string";
        protected $table = "student_info";

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

    public function user() : BelongsTo {
        return $this->belongsTo(User::class,"user_id","user_id");
    }

    public function lastActivity(){
        return $this->hashMany(LastActivity::class,"student_info_id","student_id");
    }

    public function certification(){
        return $this->hashMany(Certification::class, 'student_certification','student_info_id',"certification_id");
    }
}
