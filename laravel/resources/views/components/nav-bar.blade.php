<nav>
    <link href="{{ asset('css/nav-bar.blade.css') }}" rel="stylesheet">
    <div class="navbar-content">
        <div class="logo-container">
            <img src="{{ asset('assets/Logo.svg') }}" alt="imagen del Logo">
        </div>
        <div class="search-input-container">
            <form action="{{ route('travel.search') }}" method="GET">
                <div class="form-control-container">
                    <input type="text" id="search" name="search" class="form-control" placeholder="Search...">
                    <img class="search-icon" src="{{ asset('assets/Glass-icon.svg') }}" alt="icono de búsqueda">
                </div>
            </form>
        </div>
        <div class="navbar-icons">
            <img class="icon-nav" src="{{ asset('assets/Avatar-icon.svg') }}" alt="icono perfil">
            <a href="{{ route('happy_travel.create') }}" class="nav-link">
                <img class="icon-nav" src="{{ asset('assets/Create-icon.svg') }}" alt="icono de agregar destino">
            </a>
            <a href="{{ route('happy_travel.index') }}" class="nav-link">
                <img class="icon-nav" src="{{ asset('assets/Home-icon.svg') }}" alt="icono home">
            </a>
        </div> 
    </div>
    
</nav>
<div class="blue-line"></div>