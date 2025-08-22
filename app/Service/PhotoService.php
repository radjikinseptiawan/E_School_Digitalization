<?php
namespace App\Service;
use Illuminate\Http\Request;

class PhotoService{
    protected $media;

    public function __construct(Request $media) {
        $this->media = $media;
    }

    public function uploadImage(String $inputFile){
        if ($this->media->hasFile($inputFile)) {
            return $this->media->file($inputFile)->store('photo_profile',"public");
        }   
     return null;
    }
}