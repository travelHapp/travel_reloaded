<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\SaveDestinationRequest;
use App\Models\Travel;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\UpdateDestinationRequest;

class TravelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Travel::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SaveDestinationRequest $request)
{
    $data = $request->validated();
    $user = Auth::user();

    if ($request->hasFile('image')) {
        $image = $request->file('image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->storeAs('public/images/', $imageName);
        $data['image'] = ('images/' . $imageName);
        $data['user_id'] = $user->id;

    Travel::create($data);

    return response()->json([
        'res' => true,
        'msg' => 'Destino guardado correctamente',
        'image_url' => Storage::url('public/images/' . $imageName)
    ], 200);
    }
    
}


    /**
     * Display the specified resource.
     */
    public function show(Travel $travel)
    {
        return response()->json([
             'res'=> true,
             'travel'=> $travel
        ],200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDestinationRequest $request, $id)
{
    $travel = Travel::findOrFail($id);

    $travel->fill($request->validated());

    if ($request->hasFile('image')) {
        $image = $request->file('image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->move(storage_path('public/storage/images'), $imageName);
        $travel->image = $imageName;
    }

    $travel->save();

    return response()->json([
        'res' => true,
        'msg' => 'Destino actualizado correctamente',
        'data' => $travel
    ], 200);
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
{
    $travel = Travel::findOrFail($id);

    if ($travel->image) {
        Storage::delete('public/' . $travel->image);
    }

    $travel->delete();

    return response()->json([
        'res' => true,
        'msg' => 'Destino eliminado correctamente'
    ], 200);
}

}
