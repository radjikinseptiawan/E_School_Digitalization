<?php
namespace App\Service;

use Illuminate\Http\UploadedFile;
use Illuminat\Support\Facades\Storage;
class PhotoService{
    /**
    *@param UploadFile|null $file
    *@param string $storagePath
    *@return string|null 
    
    */

    public function uploadImage(UploadedFile $file,String $storagePath){
        if ($file) {
            $filename = uniqid() . "." . $file->getClientOriginalExtension();
            return $file->storeAs($storagePath,$filename,"public");
        }   
     return null;
    }
}