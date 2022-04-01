<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Amenities;


use Illuminate\Support\Facades\Storage;

class AmenityController extends Controller
{
    public function index()
    {
        return Amenities::all();
    }
}
