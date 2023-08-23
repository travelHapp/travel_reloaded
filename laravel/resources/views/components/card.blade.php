<a href="{{ route('happy_travel.show', ['happy_travel' => $travel->id]) }}" class="card-link">
<div class="card" style="width: 17rem;">
    <img class="card-img-top" src="{{ $travel->image }}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">{{ $travel->name }}</h5>
        <p class="card-text">{{ $travel->location }}</p>
    </div>
</div>
</a>

