# Base Api Express - Sequelize

_Este proyecto basado en express, como indica el titulo ser una base para realizar una api de servicios REST con el ORM Sequelize._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

**Estructura de proyecto**

```
├── api.js
├── app.js
├── config
|  ├── ambiente.js
|  ├── config.js
|  └── globales.js
├── controllers
|  └── prueba.js
├── database
|  ├── bd.json
|  └── sequelize.js
├── LICENSE.md
├── models
├── package-lock.json
├── package.json
├── README.md
└── routes
   ├── main.js
   └── prueba.js
```

### Instalación 🔧

```
npm install
```

### Post-Instalación ⚙️

Modificar los parametros de la base de datos antes de iniciar.
**Ruta**: *database/bd.json*

```
{
  "dev": {
    "username": "username",
    "password": "password",
    "database": "database",
    "host": "host",
    "dialect": "dialect",
    "port": "port",
    "define": {
      "timestamps": false
    }
  },
  "qa": {
    "username": "username",
    "password": "password",
    "database": "database",
    "host": "host",
    "dialect": "dialect",
    "port": "port",
    "define": {
      "timestamps": false
    }
  },
  "production": {
    "username": "username",
    "password": "password",
    "database": "database",
    "host": "host",
    "dialect": "dialect",
    "port": "port",
    "define": {
      "timestamps": false
    }
  }
}
```

[sequelize-auto](https://github.com/sequelize/sequelize-auto) permite mappear las tablas de la base de datos y generar los modelos de forma automatica.

```
npm i -g sequelize-auto
Ejemplo: sequelize-auto -o "./models" -d database -h host -u user -p port -x pass -e dialect -s schema
```

## Development 📦

Inicia el servidor con [Nodemon](https://www.npmjs.com/package/nodemon)

```
npm run dev
```

## Producción ⌨️

```
npm start
```

## Construido con 🛠️

* [body-parser](https://www.npmjs.com/package/body-parser) - middleware para analizar cuerpos de solicitud HTTP
* [cors](https://www.npmjs.com/package/cors) - Control de acceso HTTP
* [express](https://www.npmjs.com/package/express) - Framework WEB
* [express-list-endpoints](https://www.npmjs.com/package/express-list-endpoints) - Permite mapear los puntos de acceso de los servicios REST
* [morgan](https://www.npmjs.com/package/morgan) - Logger REST
* [node-color-log](https://www.npmjs.com/package/node-color-log) - Logger con colores
* [sequelize](https://www.npmjs.com/package/sequelize) - ORM
* [sequelize-auto](https://github.com/sequelize/sequelize-auto) - Permite mapear las tablas de la base de datos
* [pg](https://www.npmjs.com/package/pg) - Cliente Postgres
* [pg-hstore](https://www.npmjs.com/package/pg-hstore) - Serializando y Deserializando JSON de consultas Postgres

## Autor ✒️

* **Sergio Andrés Orellana Roa** - **Edhine** - *Ingeniero De Desarrollo* - [Linkedin](https://www.linkedin.com/in/sergio-andres-orellana-roa/) - [Github](https://github.com/Edhine)

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para detalles.

## Pendientes 📌

* [Mocha](https://www.npmjs.com/package/mocha) - Paquete para Test sobre la API.
* Log con archivo.

---
⌨️ con ❤️ por [Edhine](https://github.com/Edhine) 😊
