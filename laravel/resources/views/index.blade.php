@extends ('layouts.base')
@section('content')

<div>
    <h1>Hola soy Flor</h1>
    <h2>Aquí es donde van las cards de los destinos</h2>
    <a href="{{ route('happy_travel.create') }}"  class="btn btn-primary">Page Introducir destino</a>

    </div>
@endsection