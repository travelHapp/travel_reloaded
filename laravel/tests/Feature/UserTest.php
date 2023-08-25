<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_user_registration(): void
    {

        $userData = [
            'name' => 'John Doe',
            'email' => 'johndoe@example.com',
            'password' => 'password123',
        ];
    
        $response = $this->post(route('register.custom'), $userData);
    
        $this->assertDatabaseHas('users', ['email' => $userData['email']]);
    }

    public function test_user_authentication_valid(): void
{
    $user = User::factory()->create([
        'email' => 'test@example.com',
        'password' => bcrypt('password'),
    ]);

    $response = $this->post(route('login.custom'), [
        'email' => 'test@example.com',
        'password' => 'password',
    ]);

    $response->assertRedirect(route('happy_travel.index'));
    $this->assertAuthenticatedAs($user);
}

}
