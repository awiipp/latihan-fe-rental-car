# Latihan Artikel

1.  General error: 1273 Unknown collation: 'utf8mb4_0900_ai_ci'
    Solusi:

- .env => DB_COLLATION=utf8mb4_unicode_ci
- config/database.php => 'collation' => env('DB_COLLATION', 'utf8mb4_unicode_ci'),

2. Bootstrap gak ke-load
   Solusi:

- main.jsx => import 'bootstrap/dist/css/bootstrap.min.css'

3. Token yang diambil salah
   Solusi:

- Perhatiin biar bener-bener yang diambil itu response tokennya, bukan plek se-response nya.

4. Token bearer ga ada. Malah adanya xsrf-token sama laravel-session
   Solusi:

- Cek tokennya di Session storage, bukan cookies.

5. Uncaught TypeError: <...>.map is not a function
   Solusi:

- Response API array dan data nya pastiin lagi di backend.

6. Cannot read property blabla
   Solusi:

- Tambahin ? di sebelum data, misal: data.user?.name
- Pake saat response hasil ::with() termasuk saat cek id user dengan id user login.

7. Error Link dan useAuth
   Solusi:

- Bikin BrowserRoute di App

# BARU

8. Error CORS not allowed
   Penyebab: domain berbeda. di Laravel 12, config cors dihilangin.
   Solusi:

- Bikin middleware CORS dan tambahin header:
  ->header('Access-Control-Allow-Origin', '\*')
  ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
- Register middleware nya di bootstrap/app.php
  $middleware->prepend(Cors::class);
