<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Property;


use Illuminate\Support\Facades\Storage;

class PropertyController extends Controller
{
    public function index()
    {
        $properties = Property::with('amenities', 'images')->get();
        return $properties;
    }
    public function mvcProperties()
    {
        $properties = Property::with('amenities', 'images')->get();
        return $properties;
    }
    public function show(Property $property)
    {
        return $property;
    }
    public function store(Request $R)
    {
        sleep(2);
        return $R->all();
    }
}
