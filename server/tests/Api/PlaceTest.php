comando para crear archivo php artisan make:test Api/PlacesTest
?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PlaceTest extends TestCase
use RefreshDatabase;

public function test_user_no_auth_can_see_all_places():void
{
   $this->withExceptionHandling();
   
   Place::factory()->create();

   $response = $this->getJson(api/places);
}
{
    
}