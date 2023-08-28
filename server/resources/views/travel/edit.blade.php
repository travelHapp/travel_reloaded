@extends('layouts.base')

@section('content')
<div class="form-container">
    <div>
        <div>
            <h2>Editar destino</h2>

            <form action="{{ route('travel.update', ['id' => $travel->id]) }}" method="POST" class="create-dest" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <div class="form_create col">
                    <div class="columna1 col-md-6">
                        <div class="mb-4">
                            <label for="validationTooltip01" class="form-label">Nombre</label>
                            <input type="text" name="name" class="form-control shadow-top @error('name') is-invalid @enderror" id="validationTooltip01" value="{{ old('name', $travel->name) }}">
                            @error('name')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="mb-4">
                            <label for="validationTooltip01" class="form-label">Ubicación</label>
                            <input type="text" name="location" class="form-control shadow-top @error('location') is-invalid @enderror" id="validationTooltip01" value="{{ old('location', $travel->location) }}">
                            @error('location')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="add_file mb-5">
                            <label for="validationTextarea" class="form-label">Imagen</label>
                            <div class="input-group">
                                <label class="input-group-text" for="fileInput">
                                    <input type="file" name="image" id="fileInput" class="d-none" accept="image/*">
                                    <img class="img_add" src="{{ asset('assets/add_file.svg') }}" alt="Icono de carpeta" width="30" height="30">
                                </label>
                                <input type="text" class="form-control shadow-top blue-background" placeholder="Sube una imagen" readonly>
                            </div>
                            @error('image')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>
                    <div class="columna2 col-md-6">
                        <div class="mb-3 row">
                            <label for="validationTextarea" class="form-label">Descripción</label>
                            <textarea class="form-control shadow-top blue-background custom-textarea @error('description') is-invalid @enderror" name="description" id="validationTextarea">{{ old('description', $travel->description) }}</textarea>
                            @error('description')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>
                </div>

                <div class="mb-1">
                    <button class="btn accept me-2" type="submit">Aceptar</button>
                    <a href="{{ route('happy_travel.store') }}" class="btn btn-danger">Cancelar</a>
                </div>
            </form>
        </div>
    </div>
</div>

<link rel="stylesheet" href="{{ asset('css/create_destination.css') }}">
@endsection
