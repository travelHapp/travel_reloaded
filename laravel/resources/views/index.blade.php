

@extends('layouts.base')

@section('content')
<div>
    <div class="row">
        @foreach($travels as $travel)
            <div class="col-md-3 col-sm-6">
                <div class="mx-auto">
                    @if(Auth::check() && $travel->user_id === Auth::user()->id)
                        @include('components.card', ['travel' => $travel])
                    @elseif(!$travel->user_id) 
                        @include('components.card', ['travel' => $travel])
                    @endif
                </div>
            </div>
        @endforeach
    </div>
</div>
@endsection




