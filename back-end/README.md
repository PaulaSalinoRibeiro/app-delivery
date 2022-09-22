# BACKEND

## ROTA DE LOGIN

- post http://localhost:3001/login 

espera que seja passado no body da requisição um objeto JSON, conforme mostra o exemplo a seguir:

```
{
 "email": "zebirita@email.com",
 "password": "$#zebirita#$"
}
```

e o retorno em caso de sucesso é o status 200 com um objeto

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiemViaXJpdGFAZW1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIn0sImlhdCI6MTY2Mzg3NDA2MCwiZXhwIjoxNjY2NDY2MDYwfQ.dzPDh15xJ2Lk5ha3OGC5P7S_nC42C7zCIXgxxDwi2gk",
    "name": "Cliente Zé Birita",
    "email": "zebirita@email.com",
    "role": "customer"
}
```

## ROTA PARA CRIAR UM NOVO REGISTRO

- post http://localhost:3001/user

espera que seja passado no body da requisição um objeto JSON, conforme mostra o exemplo a seguir:

```
{
  "name": "Paula Saraiva 12345",
  "email": "paulacsaraiva12345@email.com",
  "password": "GgMQSL12345"
}
```

e o retorno em caso de sucesso é o status 200 com um objeto

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoicGF1bGFjc2FyYWl2YTEyMzQ1QGVtYWlsLmNvbSIsInJvbGUiOiJjdXN0b21lciJ9LCJpYXQiOjE2NjM4NzQ1ODgsImV4cCI6MTY2NjQ2NjU4OH0.SFRGwfBFHgk3UmBN0nHlXCUk7QN0-iO3ftfhzrWl0Y0",
    "name": "Paula Saraiva 12345",
    "email": "paulacsaraiva12345@email.com",
    "role": "customer"
}
```