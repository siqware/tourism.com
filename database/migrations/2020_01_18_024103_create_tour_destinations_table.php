<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTourDestinationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tour_destinations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('type');
            $table->string('name');
            $table->text('description');
            $table->string('main_x')->default('13.589120');
            $table->string('main_y')->default('102.971565');
            $table->string('destination_x');
            $table->string('destination_y');
            $table->string('thumbnail');
            $table->bigInteger('gallery_id');
            $table->integer('view_count')->default(0);
            $table->integer('contact_count')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tour_destinations');
    }
}
