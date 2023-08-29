<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\SaveDestinationRequest;
use App\Http\Requests\UpdateDestinationRequest;
use App\Models\Travel;

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
    public function update(UpdateDestinationRequest $request, Travel $travel)
    {
        $travel->update($request->all());
        return response()->json([
            'res'=> true,
            'msg'=> 'Destino actualizado correctamente'
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
