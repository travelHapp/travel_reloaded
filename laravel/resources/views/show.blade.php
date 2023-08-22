@extends('layouts.base')

@section('content')
<div class="container">
    <div class="show-container">
        <div class="col-md-6">
            <img class="show-image" src="{{ asset($travel->image) }}" alt="Imagen del destino">
        </div>
        <div class="col-md-6 show-text">
            <img class="icon" src="{{ asset('assets/Edit-icon.svg') }}" alt="icono home">
            <img class="icon" src="{{ asset('assets/Delete-icon.svg') }}" alt="icono perfil">
            <h2>{{ $travel->name }}</h2>
            <h3>{{ $travel->location }}</h3>
            <p>{{ $travel->description }}</p>
        </div>
    </div>
</div>
@endsection