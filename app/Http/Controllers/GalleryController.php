<?php

namespace App\Http\Controllers;

use App\Gallery;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    public function store(Request $request){
        $validData = $request->validate([
            'name'=>'required',
        ]);
        $store = new Gallery();
        $store->name = $validData['name'];
        $store->save();
        return Gallery::find($store->id);
    }
}
