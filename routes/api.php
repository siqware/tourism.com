<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('/user', 'UserController');
Route::post('/user-register', 'UserController@register')->name('user.register');
Route::post('/user-login', 'UserController@login')->name('user.login');
Route::group(['middleware' => 'auth:api'], function () {
    Route::post('/file-upload', 'FileUploadController@upload')->name('file.upload');
    Route::post('/file-upload-thumb', 'FileUploadController@upload_thumb')->name('file.upload.thumb');
    Route::post('/user-change-password/{id}', 'UserController@change_password')->name('user.change.password');
    Route::post('/user-json', 'UserController@user_json')->name('user.json');
});