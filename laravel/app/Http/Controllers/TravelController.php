<?php

namespace App\Http\Controllers;

use App\Models\Travel;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class TravelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $travels = Travel::all();

        return view('index', compact('travels'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required',
            'location' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Agrega validación para la imagen
            'description' => 'required'
        ]); 
    
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName); 
            $imagePath = 'images/' . $imageName;
        }
    
     
        $travel = new Travel([
            'name' => $request->name,
            'location' => $request->location,
            'image' => $imagePath ?? null, 
            'description' => $request->description,
            'privacy' => 'private', 
        ]);
    
    
        $user = Auth::user();
        $user->travels()->save($travel);
    
        return redirect()->route('happy_travel.index')->with('success', '¡Destino agregado exitosamente!');
    }
    
    

    /**
     * Display the specified resource.
     */
    public function show($id)
{
    $travel = Travel::findOrFail($id);
    return view('show', compact('travel'));
}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Travel $travel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Travel $travel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */

     public function destroy($id): JsonResponse
     {
         try {
             $travel = Travel::findOrFail($id);
 
             if ($travel->user_id !== Auth::user()->id) {
                 return response()->json(['success' => false, 'error' => 'No tienes permiso para eliminar este destino.']);
             }
 
             $travel->delete();
             return response()->json(['success' => true, 'message' => 'Destino eliminado exitosamente']);
         } catch (ModelNotFoundException $e) {
             return response()->json(['success' => false, 'error' => 'El destino no se encontró.']);
         } catch (\Exception $e) {
             return response()->json(['success' => false, 'error' => $e->getMessage()]);
         }
     }
 
    
    public function search(Request $request)
    {
    $searchTerm = $request->input('search');

    $travels = Travel::where('name', 'like', '%' . $searchTerm . '%')
                      ->orWhere('location', 'like', '%' . $searchTerm . '%')
                      ->get();

    return view('index', compact('travels'));
}

}
