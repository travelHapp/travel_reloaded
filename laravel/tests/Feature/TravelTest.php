<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Travel;
use App\Models\User;

class TravelTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
    
    public function test_page_initial_exists(): void
    {
        $response = $this->get('/happy_travel');

        $response->assertStatus(200);
    }

    public function test_page_search_exists(): void
    {
        $response = $this->get('/search');

        $response->assertStatus(200);
    }

    public function test_page_login_exists(): void
    {
        $response = $this->get('login');

        $response->assertStatus(200);
    }

    public function test_page_register_exists(): void
    {
        $response = $this->get('register');

        $response->assertStatus(200);
    }


    public function test_page_signout_exists(): void
    {
        $this->withoutExceptionHandling();
        $response = $this->get('signout');

        $response->assertStatus(302);
    }

    public function test_page_delete_exists(): void
    {
        $this->withoutExceptionHandling();
        $response = $this->delete('/happy_travel/{id}');

        $response->assertStatus(200);
    }

    public function test_page_create_exists(): void
    {
        $this->withoutExceptionHandling();
        $response = $this->delete('/happy_travel/create');

        $response->assertStatus(200);
    }

    public function test_page_edit_exists(): void
    {
        $this->withoutExceptionHandling();
        $response = $this->get('/happy_travel/3/edit');

        $response->assertStatus(200);
    }

    public function test_create_travel(): void
    {
        $user = User::factory()->create();

        $travel = Travel::create([
            'name' => 'Nuevo viaje',
            'location' => 'Lugar de prueba',
            'image' => 'ruta/de/imagen.jpg',
            'description' => 'Descripción de prueba',
            'privacy' => 'public',
            'user_id' => $user->id,
        ]);

        $this->assertInstanceOf(Travel::class, $travel);
        $this->assertDatabaseHas('destinations', ['name' => 'Nuevo viaje']);
    }

}
