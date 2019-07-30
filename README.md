# apollo-server
Ejemplo de implementación básica de un Servidor GraphQL con Apollo Server Express

Recuerda que para ejecutar el ejemplo, es necesario instalar las librerias con el comando:

``` 
npm install
```

Y posteriormente ejecutar el archivo index.js con el comando:

```
node index.js
```

Para ver el ejemplo desde el navegador tienes que entrar a la url http://localhost:8000/graphql, te dejo un ejemplo de Query que puedes ejecutar:

```json
{
  user(id:"2") {
    name
  }
}
```
