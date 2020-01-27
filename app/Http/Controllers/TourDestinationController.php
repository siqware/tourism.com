<?php

namespace App\Http\Controllers;

use App\TourDestination;
use Illuminate\Http\Request;

class TourDestinationController extends Controller
{
    public function store(Request $request){
        $validData = $request->validate([
            'type'=>'required',
            'name'=>'required',
            'description'=>'required',
            'destination_x'=>'required',
            'destination_y'=>'required',
            'thumbnail'=>'required',
            'gallery_id'=>'required',
        ]);
        $store = new TourDestination();
        $store->type = $validData['type'];
        $store->name = $validData['name'];
        $store->description = $validData['description'];
        $store->destination_x = $validData['destination_x'];
        $store->destination_y = $validData['destination_y'];
        $store->thumbnail = $validData['thumbnail'];
        $store->gallery_id = $validData['gallery_id'];
        $store->save();
        return TourDestination::find($store->id);
    }
}
