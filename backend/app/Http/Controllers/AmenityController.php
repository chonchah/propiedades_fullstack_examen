<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Amenity;


use Illuminate\Support\Facades\Storage;

class AmenityController extends Controller
{
    public function index()
    {
        return Amenity::all();
    }
}
