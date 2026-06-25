
<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    protected $except = [
        'api/tasks/*',
        'api/*',
    ];
}
 | Out-File -FilePath app\Http\Middleware\VerifyCsrfToken.php -Encoding UTF8