<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('training_records', function (Blueprint $table) {
            $table->id();
            $table->string('body_part'); // 鍛える部位名
            $table->string('exercise_name'); // 種目名
            $table->integer('weight'); // 重さ
            $table->integer('sets'); // セット数
            $table->integer('reps'); // レップ数
            $table->timestamps(); // 作成日時と更新日時
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('training_records');
    }
};
