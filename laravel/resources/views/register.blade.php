@extends ('layouts.base')
@section('content')

<div>
    <h2>Registro de usuario</h2>

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

    <form action="{{route('happy_travel.store')}}" method="POST" class="register">
        @csrf

        <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre">
          
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">

        </div>

        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" placeholder="Contraseña">Contraseña</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>

        <button type="submit" class="btn btn-primary">Aceptar</button>
        <a href="#" class="btn btn-secondary">Cancelar</a>

        <div class="mb-3">
            <p>¿Ya tienes cuenta?</p>
            <p><a class="link-offset-2" href="#">Accede aquí</a></p>
        </div>

    </form>
</div>
@endsection