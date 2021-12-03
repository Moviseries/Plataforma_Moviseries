# Plataforma web MovieSeries

_Plataforma web para enterarte de las novedades de carteleras de cines o plataformas como Netflix, Amazón Prime Video, Roku, etc_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


### Pre-requisitos 📋

_Debes tener instalado node y una versión de (Java) jdk 17 para poner utilizar este repositorio_


### Instalación 🔧

_Se debe ejecutar en la carpeta front_end el cmd "npm install"_ 

```
npm install
```

_En la carpeta ms_back "mvn compile" para descargar las dependencias_

```
mvn compile
```
_También en la carpeta Script_DB se encuentra algunos datos de prueba, reales y funcionales a la fecha 3/12/2021, los cuales puedes testear abriendoolos y ejecutandolos con MySQL Workbench_


_Para ejecutar el proyecto se debe ejecutar la carpeta ms_back con el cmd "mvn spring-boot:run"_

```
mvnw spring-boot:run
```

_En la carpeta de font_end ejecutar el comando "npm start"_

```
npm start
```


## Ejecutando las pruebas ⚙️

_Al iniciar tenemos una interfaz de inicio con un carrousel que contiene 3 slides, 8 películas y 8 series iniciales_

_Tenemos una barra de navegación sencilla, donde podemos ver el inicio de la página, una opción para visualizar todas las películas y otra para todas las series_

_Tenemos un desplegable de categorías, donde ÚNICAMENTE FUNCIONA SI DAS CLICK EN LA PALABRA DEL GÉNERO_

_Al borde derecho de la navegación tenemos dos botones, "Login" y "Register", el formulario de registro funciona perfectamente_

_Al iniciar usuario, si lo haces correctamente, te dirige al inicio, donde ahora vas a poder agregar películas o series al final de cada sección en una pequeña ventana desplegable_

_Si deseas eliminar alguna pelicula o serie, despues de haber hecho Login, encontraras un pequeño boton debajo de las 8 peliculas o series, que dira "administrar", si lo pulsas, te redirigira a una seccion donde podras eliminar todas las series y peliculas que desees_

_CABE ACLARAR QUE EL PROYECTO NO TIENE PROTECCIÓN DE RUTAS, ASÍ QUE LA FUNCIÓN DE USUARIO NO ESTA MUY ESTRUCTURADA Y SOLO SE IMPLEMENTO CON FIN DE IMPLEMENTAR METODOLOGIA CRUD_


## Construido con 🛠️

* [Spring-boot](https://spring.io/projects/spring-boot) - El framework back usado
* [React](https://es.reactjs.org/) - Libreria web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [Intellij](https://www.jetbrains.com/es-es/idea/) - IDE usado para programar Backend
* [VSC](https://code.visualstudio.com/) - Editor de texto usado para programar Frontend

## Autores ✒️

* **Jhon Salazar** - [Jhonsl](https://github.com/jhonsl)
* **Fredy Carvajal** - [V4q3r0](https://github.com/V4q3r0)

## Licencia 📄

Free Code

## Expresiones de Gratitud 🎁

* ☕ => 🍺  
* Muchas gracias por su atención 🤓.
