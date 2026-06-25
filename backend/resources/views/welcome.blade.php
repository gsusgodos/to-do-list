<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        h1 {
            color: #333;
            margin: 0 0 20px 0;
        }
        p {
            color: #666;
            line-height: 1.6;
        }
        .links {
            margin-top: 30px;
        }
        .links a {
            display: inline-block;
            padding: 12px 24px;
            margin: 10px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }
        .links .frontend {
            background: #007bff;
            color: white;
        }
        .links .api {
            background: #6c757d;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>To-Do List API</h1>
        <p>Backend API en ejecución y listo para usar</p>
        <p>Endpoints disponibles en: <code>/api/tasks</code></p>
        <div class="links">
            <a href="http://127.0.0.1:5173" class="frontend">Ir al Frontend</a>
            <a href="http://127.0.0.1:8000/api/tasks" class="api">Ver API</a>
        </div>
    </div>
</body>
</html>
