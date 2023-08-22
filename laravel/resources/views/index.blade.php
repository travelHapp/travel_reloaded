@extends ('layouts.base')
@section('content')

<div>
    <h2>Aquí es donde van las cards de los destinos</h2>
    <a href="{{ route('happy_travel.create') }}" class="btn btn-primary">Page Introducir destino</a>
    <li class="nav-item">
        <a class="nav-link" href="{{ route('login') }}">Login</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="{{ route('register-user') }}">Register</a>
    </li>

    <div class="row">
        @foreach($travels as $travel)
        <div class="col-md-3 col-sm-6">
            <div class="mx-auto">
                @include('components.card', ['travel' => $travel])
            </div>
        </div>
        @endforeach
    </div>
    @endsection