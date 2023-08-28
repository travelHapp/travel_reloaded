<div class="card" style="width: 17rem;">
    @auth
    <a href="{{ route('happy_travel.show', ['happy_travel' => $travel->id]) }}" class="card-link">
        <img class="icon-info" src="{{ asset('assets/Info-icon.svg') }}" alt="icono info">
    </a>
    @endauth
    <img class="card-img-top" src="{{ $travel->image }}" alt="Card image cap">
    <div class="card-body">
        <div class="icon-container desktop">
            @if(Auth::check() && $travel->user_id === Auth::user()->id)
            <a href="{{ route('happy_travel.edit', ['happy_travel' => $travel->id]) }}" class="card-link">
                <img class="icon-edit" src="{{ asset('assets/Edit-icon.svg') }}" alt="icono editar">
            </a>
            <a id="deleteLink" href="#" data-toggle="modal" data-target="#deleteModal">
                <img class="icon-delete" src="{{ asset('assets/Delete-icon.svg') }}" alt="icono borrar">
            </a>
            @endif
        </div>
        <h5 class="card-title">{{ $travel->name }}</h5>
        <p class="card-text">{{ $travel->location }}</p>
    </div>
</div>


