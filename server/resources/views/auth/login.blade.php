@extends('layouts.base')
@section('content')
<main class="login-form">
<link href="{{ asset('css/auth.blade.css') }}" rel="stylesheet">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card-login">
                    <h3 class="card-header text-center">Iniciar sesión</h3>

                    @if ($errors->any())
                    <div class="alert alert-danger mt-2">
                        <strong>Lo lamento algo fue mal...</strong> <br>
                        <ul>
                            @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                    @endif

                    <div class="card-body">
                        <form action="{{route('login.custom')}}" method="POST" class="login">
                            @csrf

                            <div class="form-group mb-3">
                                <label for="validationTextarea" class="form-label">Email</label>
                                <input type="email" placeholder="Email" id="email" class="form-auth"
                                    name="email" required autofocus>
                                @if ($errors->has('email'))
                                <span class="text-danger">{{ $errors->first('email') }}</span>
                                @endif
                            </div>

                            <div class="form-group mb-3">
                                <label for="validationTextarea" class="form-label">Contraseña</label>
                                <input type="password" placeholder="Contraseña" id="password" class="form-auth"
                                    name="password" required>
                                @if ($errors->has('password'))
                                <span class="text-danger">{{ $errors->first('password') }}</span>
                                @endif
                            </div>

                            <div class="container-btn">
                                <button type="submit" href="{{ route('happy_travel.index') }}" class="btn btn-primary">Aceptar</button>
                                <a href="{{ route('happy_travel.index') }}"  class="btn btn-secondary">Cancelar</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
@endsection

