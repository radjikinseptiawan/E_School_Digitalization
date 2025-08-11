<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use function Laravel\Prompts\table;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students',function(Blueprint $table){
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->enum('gender',['male','female','other']);
            $table->string('parent_name');
            $table->string('parent_phone');
            $table->date('enrollment_date');
            $table->enum('status',['active','inactive','graduated']);
            $table->string('NISN')->unique();
            $table->timestamp('created_at');
            $table->timestamp('updated_at');
        });
        //
    
        Schema::create('classes',function(Blueprint $table){
            $table->id();
            $table->string('class_name');
            $table->string('teacher_name');
            $table->enum('semester',['odd','even']);
            $table->timestamp('created_at');
            $table->timestamp('updated_at');
        });
    
        
        Schema::create('student_classes',function(Blueprint $table){
            $table->id();
            $table->foreignId('student_id')->constrained('students')->onDelete('cascade');
            $table->foreignId('class_id')->constrained('classes')->onDelete('cascade');
            $table->timestamp('created_at');
            $table->timestamp('updated_at');
        });
    }   

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::dropIfExists('students');
        Schema::dropIfExists('classes');
        Schema::dropIfExists('student_classes');
    }
};
