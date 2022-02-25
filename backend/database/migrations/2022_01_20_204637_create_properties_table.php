<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePropertiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("public_key", 100);
            $table->string("name", 300);
            $table->text("description");
            $table->decimal('price', $precision = 10, $scale = 2);
            $table->enum('property_type', ['HOUSE', 'APARTAMENT', 'TERRAIN', 'OFFICE', 'LOCAL']);
            $table->enum('operation', ['SALE', 'RENT', 'TRANSFER']);
            $table->string("state", 100);
            $table->string("city",150);
            $table->string("neighborhood", 100);
            $table->string("cp", 20);
            $table->string("street", 200);
            $table->string('latitude', 20);
            $table->string('longitude', 20);
            $table->integer("num_bathrooms");
            $table->integer("bedrooms");
            $table->bigInteger("m2_construction");
            $table->integer("parking");
            $table->integer("age");
            $table->integer("departments");
            $table->integer("floor");

            $table->unsignedBigInteger('user');

            $table->foreign('user')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('properties');
    }
}
