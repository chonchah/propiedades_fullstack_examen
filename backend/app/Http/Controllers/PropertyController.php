<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Property;


use Illuminate\Support\Facades\Storage;

class PropertyController extends Controller
{
    public function index(){
        $propeties = Property::all();

        return $propeties;
    }
    public function mvcProperties()
    {
        $propeties = Property::all();
        return view('properties',compact('propeties'));
    }
    public function show(Property $property){
        return $property;
    }
}
