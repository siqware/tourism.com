<?php

namespace App\Http\Controllers;

use App\GalleryDetail;
use Illuminate\Http\Request;

class GalleryDetailController extends Controller
{
    public function store(Request $request){
        $validData = $request->validate([
            'gallery_id'=>'required',
            'name'=>'required',
        ]);
        $store = new GalleryDetail();
        $store->gallery_id = $validData['gallery_id'];
        $store->name = $validData['name'];
        $store->save();
        return GalleryDetail::find($store->id);
    }
}
