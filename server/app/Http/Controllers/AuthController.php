<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Hash;
use Session;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;

class AuthController extends Controller
{
    public function register(RegisterRequest $request) {
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        return response()->json([
            'res' => true,
            'msg' => 'Usuario registrado correctamente',
        ]);

    }
    
    public function login(LoginRequest $request)
    {
        $user = User::where('email', $request->email)->first();

        if (! $user|| ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'msg' => ['Las credenciales soon incorrectas'],
            ]);
        } 

        $token = $user->createToken($request->email)->plainTextToken;

        return response()->json([
            'res' => true,
            'msg' => 'Inicio de sesión exitoso',
            'token' => $token
        ],200);
    }
        
    public function logout(Request $request) {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'res' => true,
            'msg' => "Token eliminado correctamente"
        ],200);
     }
}
