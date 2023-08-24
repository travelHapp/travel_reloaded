# Happy Travel
<div align="center">
   <img src="./laravel/public/assets/Logo.svg" width="180px">
</div>

## Developers
 [<img src="https://avatars.githubusercontent.com/u/79811065?v=4" width=150><br><sub>Génesis Núñez</sub>](https://github.com/genesis-nf)| [<img src="https://avatars.githubusercontent.com/u/131755081?v=4" width=115><br><sub>Florencia Bordón</sub>](https://github.com/florienborg) |  [<img src="https://avatars.githubusercontent.com/u/131244871?v=4" width=115><br><sub>Cindy Leiva</sub>](https://github.com/CindyLeiva) |  [<img src="https://avatars.githubusercontent.com/u/107352744?v=4" width=115><br><sub>Mónica Blanco</sub>](https://github.com/mgblanco10) |  
| :---: | :---: | :---: | :---: |

## 📓 Tabla de contenidos 
   1. [Información General](#información-general)
   2. [Mockups](#mockups)
   3. [Tecnologías](#tecnologías)
   4. [Herramientas](#herramientas)
   5. [Recursos](#recursos)

## 🗃 Información General
Hablando de Vacaciones, ¿A quién no le gusta viajar y conocer lugares nuevos? La empresa HappyTravel nos ha contratado para desarrollar una aplicación web, para que las personas puedan contar los destinos que les encantaría visitar y su razón. El objetivo es que usuarios no autenticados puedan mirar todos los destinos soñados de otros usuarios y a su vez un usuario autenticado pueda crear, editar y eliminar su propios sueños viajeros.

## Mockups

#### Atomic Design
<img src="./laravel/public/assets/atomic-desing.png" width="400px">

#### Versión Desktop
<img src="./laravel/public/assets/desktop.png" width=900px>

#### Versión Mobile
<img src="./laravel/public/assets/version-mobile.png" width=900px>


## 🛠 Tecnologías
<div>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
<img src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" />  
<img src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="react" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/php.svg" alt="php" width="40" height="40"/>
<img src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="react" width="40" height="40"/>
<img src="https://profilinator.rishav.dev/skills-assets/laravel-plain-wordmark.svg" alt="Laravel" width="40" height="40"/>
</div>

## 🛠 Herramientas
<div>
<img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/>
<img src="https://w7.pngwing.com/pngs/512/824/png-transparent-visual-studio-code-hd-logo-thumbnail.png" alt="vscode" width="40" heigth="40"/>
<img src="https://w7.pngwing.com/pngs/115/721/png-transparent-trello-social-icons-icon.png" alt="trello" width="40" heigth="40"/>
<img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" width="40" heigth="40"/>
<img src="https://profilinator.rishav.dev/skills-assets/xampp.png" alt="react" width="40" height="40"/> </div>

## Instalación

Breve descripción de como poder ver nuestro proyecto, para ejecutarlo necesitas tener conocimientos previos sobre como funciona Mamp/Xamp y tener instalado composer
1. Clona este repositorio en tu máquina local:
`https://github.com/florienborg/happytravel.git`
2. Coloca la carpeta del proyecto en la carpeta de proyectos de tu MAMP o XAMPP según sea el caso.
3. Crea la base de datos y la tabla:
- Abre tu gestor de bases de datos (por ejemplo, phpMyAdmin).
- Crea una nueva base de datos con el nombre  "happy_travel" aquí las tablas las realizaremos desde tú editor de código.
4. Abre en tú editor de texto el proyecto y luego dentro de la carpeta laravel en la terminal debes poner
`composer install`
y luego, el cuál hará que se carguen las tablas del proyecto
`php artisan migrate`
Esta es una aplicación para guardar y compartir destinos, entoncés para que tener algunos datos en la base de datos, hemos creado los seeders los cuales te permitirán tener 10 destininos estos no podrás borrarlos, ni editarlos a diferencia de los que cargues tú, para poder tener estos destinos debes en la terminal poner 
`php artisan db:seed --class=DestinationsTableSeeder`

y finalmente para ver el proyecto en tú navegador ejecuta el comando 

`php artisan server`

Y disfruta de la experiencia de ver y guardar destinos.

## Recursos
- [login y register](https://www.positronx.io/laravel-custom-authentication-login-and-registration-tutorial/)

- [CRUD](https://www.youtube.com/watch?v=Rxz0GwUassM)

- [CRUD Laravel 10](https://www.youtube.com/watch?v=MJp8ycjNW5s)
