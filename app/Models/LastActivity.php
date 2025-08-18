<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LastActivity extends Model
{
    protected $table = 'last_activites';

    protected $fillable = [
        'student_info_id',
        'last_class_activity',
        'last_webinar_activity',
        'class_complete',
        'class_following',
        'seminar_following',
    ];

    public function studentInfo(){
        return $this->belongsTo(Students::class, 'student_info_id');
    }
}
