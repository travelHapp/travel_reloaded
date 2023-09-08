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
    public function index()
    {
        return Travel::all();
    }

    public function store(SaveDestinationRequest $request)
    {
        $data = $request->validated();
        $user = Auth::user();

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->storeAs('public/images/', $imageName);
            $data['image'] = 'images/' . $imageName;
            $data['user_id'] = $user->id;
        }

        Travel::create($data);

        return response()->json([
            'res' => true,
            'msg' => 'Destino guardado correctamente',
            'image_url' => Storage::url('public/images/' . $imageName)
        ], 200);
    }

    public function show(Travel $travel)
    {
        return response()->json([
            'res' => true,
            'travel' => $travel
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $travel = Travel::findOrFail($id);

        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            // Elimina la imagen anterior si existe
            if ($travel->image) {
                Storage::delete('public/' . $travel->image);
            }

            // Guarda la nueva imagen
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->storeAs('public/images/', $imageName);
            $travel->image = 'images/' . $imageName;
        }

        if ($request->filled('name')) {
            $travel->name = $request->input('name');
        }
        if ($request->filled('location')) {
            $travel->location = $request->input('location');
        }
        if ($request->filled('description')) {
            $travel->description = $request->input('description');
        }

        $travel->save();

        return response()->json([
            'res' => true,
            'msg' => 'Destino actualizado correctamente',
            'data' => $travel
        ], 200);
    }

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
