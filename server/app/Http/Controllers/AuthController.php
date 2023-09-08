<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        // Utiliza el método `create` para crear un nuevo usuario
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        return response()->json([
            'res' => true,
            'msg' => 'Usuario registrado correctamente',
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // El usuario está autenticado, genera un token de acceso
            $token = $request->user()->createToken('authToken')->plainTextToken;

            return response()->json([
                'res' => true,
                'msg' => 'Inicio de sesión exitoso',
                'token' => $token
            ], 200);
        }

        throw ValidationException::withMessages([
            'msg' => ['Las credenciales son incorrectas'],
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'res' => true,
            'msg' => "Token eliminado correctamente"
        ], 200);
    }
}
