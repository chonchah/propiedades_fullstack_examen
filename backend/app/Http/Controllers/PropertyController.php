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
        $property = new Property($R->property);
        $property->public_key = uniqid();
        $property->user = 1;
        $property->save();
        $amenities = $R->amenities;
        $images = $R->images;
        foreach ($amenities as $id => $check) {
            $property->property_amenities()->create(['amenity_id' => $id]);
        }
        $order = 0;
        foreach ($images as $id => $src) {
            $property->images()->create([
                'order' => $order++,
                'path' => $src
            ]);
        }
        $property->push();
        return $property;
    }
}
