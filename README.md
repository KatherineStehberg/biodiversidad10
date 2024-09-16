# Hito 4 

https://biodiversidad7.onrender.com/

# Biodiversidad

Hito 4

1. Realizar el deploy de la aplicación cliente.
   
 Se realizó la subida de la base de datos con éxito.

 ![site is live](https://github.com/user-attachments/assets/987c0e41-a5c4-40a6-887d-e3183c3b6c7e)


2. Realizar el deploy de la aplicación backend.

   ![deployed](https://github.com/user-attachments/assets/7240d15b-b2d6-4c76-98df-362f7b5821ba)


3. Realizar el deploy de la base de datos.

![build command](https://github.com/user-attachments/assets/8ebfc19c-6080-4fcc-9492-db0bda11345d)


4. Integrar la aplicación cliente con la aplicación backend en producción.

[ https://biodiversidad-master-npfl.onrender.com/](https://biodiversidad7.onrender.com/)



# Hito3-Backend
Desafio Latam Proyecto final (G62)

https://github.com/KatherineStehberg/Biodiversidad-master

thunder client

1. Login (POST /api/auth/Frontend/Src/pages/Login.html)
Método: POST
URL: /api/auth/Frontend/Src/pages/Login.html
Body (JSON):
{
  "username": "user",
  "password": "password123"
}

Resultado esperado: 200 OK (si el login es exitoso) o 401 Unauthorized (si el login falla).

2. Obtener todos los productos (GET /api/products)
Método: GET
URL: /api/products
Body: N/A (no es necesario enviar un body).
Resultado esperado: 200 OK con una lista de productos en el cuerpo de la respuesta.
3. Crear un nuevo servicio (POST /api/services)
Método: POST
URL: /api/services
Headers:
Authorization: Bearer [your-token]
Body (JSON):
{
  "title": "Nuevo Servicio",
  "description": "Descripción del nuevo servicio",
  "price": 29.99
}

Resultado esperado: 201 Created con los detalles del servicio recién creado.

4. Obtener todos los usuarios (GET /api/users)
Método: GET
URL: /api/users
Body: N/A (no es necesario enviar un body).
Resultado esperado: 200 OK con una lista de usuarios en el cuerpo de la respuesta.

![Captura de pantalla 2024-09-08 a la(s) 22 56 42](https://github.com/user-attachments/assets/cd906162-620f-4c5a-bf75-3de069385d83)

