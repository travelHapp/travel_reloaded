<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Travel extends Model
{
    use HasFactory;

    protected $table = 'destinations';

    protected $fillable = ['name', 'location', 'image', 'description','privacy'];

    protected $hidden = ['created_at', 'updated_at'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    static function search($query)
    {
        $results = Travel::where('title', 'LIKE', "%$query%")
                              ->orWhere('location', 'LIKE', "%$query%")
                              ->get();
        return $results;
    }
}
