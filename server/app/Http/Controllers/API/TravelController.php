<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\SaveDestinationRequest;
use App\Models\Travel;
use Illuminate\Support\Facades\Storage;

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
        Travel::create($request->all());
        return response()->json([
            'res'=> true,
            'msg'=> 'Destino guardado correctamente'
        ],200);
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
    public function update(Request $request, $id)
{
    // Buscar el modelo por el ID o lanzar una excepción si no se encuentra
    $travel = Travel::findOrFail($id);

    // Procesar la imagen si se envía
    if ($request->hasFile('image')) {

        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $image = $request->file('image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->move(storage_path('app/public'), $imageName);
        $travel->image = $imageName;

        if ($travel->image) {
            Storage::delete($travel->image);
        }

        $travel->image = $imagePath;
    }

    // Actualizar campos si se proporcionan en la solicitud
    if ($request->filled('name')) {
        $travel->name = $request->input('name');
    }
    if ($request->filled('location')) {
        $travel->location = $request->input('location');
    }
    if ($request->filled('description')) {
        $travel->description = $request->input('description');
    }

    // Guardar los cambios en la base de datos
    $travel->save();

    return response()->json([
        'res' => true,
        'msg' => 'Destino actualizado correctamente'
    ], 200);
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
