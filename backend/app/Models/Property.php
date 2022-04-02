<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'property_type',
        'operation',
        'state',
        'city',
        'neighborhood',
        'cp',
        'street',
        'latitude',
        'longitude',
        'num_bathrooms',
        'bedrooms',
        'm2_construction',
        'parking',
        'age',
        'departments',
        'floor',
        'public_key',
        'user',
    ];
    public function property_amenities()
    {
        return $this->hasMany(PropertyAmenities::class, 'property_id', 'id');
    }
    public function amenities()
    {
        return $this->hasManyThrough(Amenities::class, PropertyAmenities::class, 'property_id', 'id', 'id', 'amenity_id');
    }
    public function images()
    {
        return $this->hasMany(PropertyImages::class, 'property', 'id');
    }
}
