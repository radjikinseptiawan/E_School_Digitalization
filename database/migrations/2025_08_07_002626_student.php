<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('student_info', function (Blueprint $table) {
            $table->uuid("student_id")->primary();
            $table->foreignUuid("user_id")->constrained("users","user_id")->onDelete('cascade');
            $table->string("nomor_telepon")->nullable();
            $table->string("domisili")->nullable();
            $table->string("tanggal_lahir")->nullable();
            $table->binary("photo_profile")->nullable();
            $table->timestamps();
        });

        Schema::create('last_activities', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('student_info_id')
                  ->constrained('student_info',"student_id")
                  ->onDelete('cascade');
            $table->string("last_class_activity");
            $table->string("last_webinar_activity");
            $table->string("class_complete");
            $table->integer("class_following");
            $table->integer("seminar_following");
            $table->timestamps();
        });

        Schema::create('certifications', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->timestamps();
        });

        Schema::create('student_certifications', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('student_id')->constrained('student_info',"student_id")->onDelete('cascade');
            $table->foreignId('certification_id')->constrained('certifications')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('student_certifications');
        Schema::dropIfExists('certifications');
        Schema::dropIfExists('last_activities');
        Schema::dropIfExists('student_info');
    }
};
