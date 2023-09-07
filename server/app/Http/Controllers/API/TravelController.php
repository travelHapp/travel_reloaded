<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\SaveDestinationRequest;
use App\Models\Travel;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

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

        if ($request->hasFile('image')) {
            // Sube la imagen y almacena la ruta en la base de datos
            $imagePath = $request->file('image')->store('images', 'public');
            $data['image'] = $imagePath;
        }

        $travel = Travel::create($data);

        return response()->json(['message' => 'Destino creado correctamente', 'travel' => $travel], 201);
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
