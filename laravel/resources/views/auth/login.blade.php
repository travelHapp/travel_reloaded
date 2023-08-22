@extends('layouts.base')
@section('content')
<main class="login-form">
    <div>
        <h2>Login</h2>

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

        <form action="{{route('login.custom')}}" method="POST" class="login">
            @csrf

            <!-- <div class="mb-3">
                <label for="name" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Nombre">

            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Email">
            </div> -->

            <div class="form-group mb-3">
                <input type="text" placeholder="Email" id="email" class="form-control" name="email" required autofocus>
                @if ($errors->has('email'))
                <span class="text-danger">{{ $errors->first('email') }}</span>
                @endif
            </div>
            <div class="form-group mb-3">
                <input type="password" placeholder="Password" id="password" class="form-control" name="password"
                    required>
                @if ($errors->has('password'))
                <span class="text-danger">{{ $errors->first('password') }}</span>
                @endif
            </div>


            <button type="submit" class="btn btn-primary">Aceptar</button>
            <a href="#" class="btn btn-secondary">Cancelar</a>

        </form>
    </div>
</main>
@endsection