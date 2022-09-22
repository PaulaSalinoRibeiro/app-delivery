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

e o retorno em caso de sucesso é o status 201 com um objeto

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoicGF1bGFjc2FyYWl2YTEyMzQ1QGVtYWlsLmNvbSIsInJvbGUiOiJjdXN0b21lciJ9LCJpYXQiOjE2NjM4NzQ1ODgsImV4cCI6MTY2NjQ2NjU4OH0.SFRGwfBFHgk3UmBN0nHlXCUk7QN0-iO3ftfhzrWl0Y0",
    "name": "Paula Saraiva 12345",
    "email": "paulacsaraiva12345@email.com",
    "role": "customer"
}
```

## ROTA DE PRODUTOS

- get http://localhost:3001/product

Essa rota permite listar todos os produtos cadastrados no banco de dados, espera que seja passado um token no `headers`

```
{
  "autorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoicGF1bGFjc2FyYWl2YTEyMzQ1QGVtYWlsLmNvbSIsInJvbGUiOiJjdXN0b21lciJ9LCJpYXQiOjE2NjM4NzQ1ODgsImV4cCI6MTY2NjQ2NjU4OH0.SFRGwfBFHgk3UmBN0nHlXCUk7QN0-iO3ftfhzrWl0Y0"
}
```

Caso o `token`seja válido retorna um array com os produtos e o status 200;

```
[
    {
        "id": 1,
        "name": "Skol Lata 250ml",
        "price": "2.20",
        "urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg"
    },
    {
        "id": 2,
        "name": "Heineken 600ml",
        "price": "7.50",
        "urlImage": "http://localhost:3001/images/heineken_600ml.jpg"
    },
    {
        "id": 3,
        "name": "Antarctica Pilsen 300ml",
        "price": "2.49",
        "urlImage": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg"
    },
    {
        "id": 4,
        "name": "Brahma 600ml",
        "price": "7.50",
        "urlImage": "http://localhost:3001/images/brahma_600ml.jpg"
    },
    {
        "id": 5,
        "name": "Skol 269ml",
        "price": "2.19",
        "urlImage": "http://localhost:3001/images/skol_269ml.jpg"
    },
    {
        "id": 6,
        "name": "Skol Beats Senses 313ml",
        "price": "4.49",
        "urlImage": "http://localhost:3001/images/skol_beats_senses_313ml.jpg"
    },
    {
        "id": 7,
        "name": "Becks 330ml",
        "price": "4.99",
        "urlImage": "http://localhost:3001/images/becks_330ml.jpg"
    },
    {
        "id": 8,
        "name": "Brahma Duplo Malte 350ml",
        "price": "2.79",
        "urlImage": "http://localhost:3001/images/brahma_duplo_malte_350ml.jpg"
    },
    {
        "id": 9,
        "name": "Becks 600ml",
        "price": "8.89",
        "urlImage": "http://localhost:3001/images/becks_600ml.jpg"
    },
    {
        "id": 10,
        "name": "Skol Beats Senses 269ml",
        "price": "3.57",
        "urlImage": "http://localhost:3001/images/skol_beats_senses_269ml.jpg"
    },
    {
        "id": 11,
        "name": "Stella Artois 275ml",
        "price": "3.49",
        "urlImage": "http://localhost:3001/images/stella_artois_275ml.jpg"
    }
]
```

- get http://localhost:3001/product/id

Essa rota permite encontrar um produto cadastrados no banco de dados pelo id, espera que seja passado um token no `headers`

```
{
  "autorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoicGF1bGFjc2FyYWl2YTEyMzQ1QGVtYWlsLmNvbSIsInJvbGUiOiJjdXN0b21lciJ9LCJpYXQiOjE2NjM4NzQ1ODgsImV4cCI6MTY2NjQ2NjU4OH0.SFRGwfBFHgk3UmBN0nHlXCUk7QN0-iO3ftfhzrWl0Y0"
}
```

Caso o `token`seja válido retorna um objeto com os produtos e o status 200;

```
{
    "id": 2,
    "name": "Heineken 600ml",
    "price": "7.50",
    "urlImage": "http://localhost:3001/images/heineken_600ml.jpg"
}
```
