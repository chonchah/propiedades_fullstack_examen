<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Rutas nuevas
Route::get('amenities', 'App\Http\Controllers\AmenityController@index');
Route::post('property', 'App\Http\Controllers\PropertyController@store');

//Rutas originales
Route::get('properties', 'App\Http\Controllers\PropertyController@index');
Route::get('properties/{property}', 'App\Http\Controllers\PropertyController@show');
