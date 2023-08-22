<nav>
    <link href="{{ asset('css/nav-bar.blade.css') }}" rel="stylesheet">
    <div class="navbar-content">
        <div class="logo-container">
            <img src="{{ asset('assets/Logo.svg') }}" alt="imagen del Logo">
        </div>
        <div class="search-input-container">
            <div class="form-control-container">
                <input type="text" id="search" name="search" class="form-control" placeholder="Search...">
                <img class="search-icon" src="{{ asset('assets/Glass-icon.svg') }}" alt="icono de búsqueda">
            </div>
            <img class="icon-nav" src="{{ asset('assets/Home-icon.svg') }}" alt="icono home">
            <img class="icon-nav" src="{{ asset('assets/Avatar-icon.svg') }}" alt="icono perfil">
        </div>
    </div>
</nav>
<div class="blue-line"></div>