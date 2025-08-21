<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;
class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasUuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $primaryKey = "user_id";
    protected $keyType = "string";
    protected $table = "users";
    public $incrementing = false;

    protected $fillable = [
        'nama_lengkap',
        'email',
        'password',
    ];


    public function profile(){
        return $this->hasOne(Profile::class,"user_id","user_id");
    }
    
    protected static function boot(){
        parent::boot();

        static::creating(function($model){
            if(empty($model->user_id)){
                $model->user_id = (string) Str::uuid();
            }
        });


        static::created(function($user){
            $user->profile()->create([
            'domisili' => null,
            'nomor_telepon' => null,
            'tanggal_lahir' => null,
            ]);
        });
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
