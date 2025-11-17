# Set Up Backend (Laravel)
- composer create-project laravel/laravel:^11 NamaProjek
- setup .env
- php artisan migrate
- php artisan install:api
- Model User add: HasApiTokens
- Edit Users Migration
- php artisan migrate
- Create Controller Auth (Login, Logout, Register)
- apiPrefix (optional)
- php artisan make:model NamaModel -mc --api
- Relationship (foreign_id = belongsTo || references = hasMany)
- File handler (php artisan storage:link)

# Set Up Frontend (React JS)
- npm create vite@latest (Javascript)
- npm i axios react-router-dom react-bootstrap bootstrap
- Clear (App.css & index.css)
- main.jsx = import 'bootstrap/dist/css/bootstrap.min.css'
- Create AuthContext
- Create AuthLayout
- Set Up Axios Config (main.jsx)
- Create TopBar (handleLogout)
- Set Up Routes (App.jsx)
- Create LoginPage (handleLogin)
- Create: Get & Delete (all)
- (optional) Create: show (all)
- Create: Create & Update (all)

# NOTES
- Pahamin code (takut ditanyain ntar)
- BE: Perbedaan find() dan get(). Beda response object dan array.
- FE: Apakah ada yg harus diubah di FE kalau apiPrefix di BE diubah?
- FE: Perbedaan useState([]) dan useState({}).
- BE: File handling.
- FE: prefix di BE nanganinnya gimana?
- Cek id user dengan user yang lagi login => fetch data /user dan ambil id nya.