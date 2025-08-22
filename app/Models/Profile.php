<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class Profile extends Model
{
    //
    use HasUuids;
    protected $table = "student_info";
    protected $primaryKey = "student_id";
    protected $keyType = "string";
    public $incrementing = false;

    protected $fillable = [
        "user_id",
        "domisili",
        "nomor_telepon",
        "photo_profile",
        "tanggal_lahir"
    ];
    
    protected static function boot(){
        parent::boot();

        static::creating(function ($model){
            if(empty($model->student_id)){
                $model->student_id = (string) Str::uuid();
            }
        });
    }

     public function user()
    {
        return $this->hasOne(User::class, "user_id", "student_id");
    }
}
