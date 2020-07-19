# SSASoft BackOffice V2 (ssasoft_backoffice_v2)

Office Automation for Singapore Soka Association

## Prerequisites
### Installation of the Docker Container into development computer
1. Refer to the below link to do the installation of docker container
   https://github.com/chankl78/alpinenginxphp.git


## Installation
### Install with necessary data and tools to start the development of the backoffice v2
1. Install arcanedev/log-viewer so that we can view the logs
   ```
   composer require arcanedev/log-viewer:~7.0.0
   ```

   - You can refer to the below link for more information in installation
   - https://github.com/ARCANEDEV/LogViewer/blob/master/_docs/1.Installation-and-Setup.md

   - ``` php artisan log-viewer:publish``` -> To run the log-viewer
   - In the resources/views/vendor/log-viewer/bootstrap-4/_master.blade.php
      ```
      <title>LogViewer - Created by ARCANEDEV</title>

      to change to as below or whatever title for the page you want

      <title>SSASoft Logs - BackOffice</title>
      ```
   - In the config/log-viewer
      ```
      'route'         => [
        'enabled'    => true,

        'attributes' => [
            'prefix'     => '***CHANGE THIS prefix***',

            'middleware' => env('ARCANEDEV_LOGVIEWER_MIDDLEWARE') ? explode(',', env('ARCANEDEV_LOGVIEWER_MIDDLEWARE')) : null,
        ],

      ```
   - In the browser, type below to view the logs
      ```
      http://127.0.0.1:8882/log-viewer/
      ```

2. Loading the tables in MariaDB (Please ensure you have setup your DB in .env correctly before running below command)
   ```
   php artisan migrate
   ```

   or

   ```
   php artisan migrate:fresh --seed
   ```

   The above code is to delete all the tables and install a fresh new database with seed data.

3. Loading the default data for MariaDB
   ```
   php artisan db:seed
   ```

4. Loading Dummy Data for SSA Members (If you need it.  It is not included inside the above seed)
   ```
   php artisan db:seed --class=MembersmSSASeeder
   ```

5. If the docker container does not run quasar, run the following command in docker
   ```
   npm install -g @quasar/cli
   ```

6. Telescope for development machine
   ```
   composer require laravel/telescope
   php artisan telescope:install
   php artisan migrate
   php artisan telescope:publish

   - prevent the Telescope package from being auto-discovered in production by adding the following to your composer.json file

   "extra": {
    "laravel": {
        "dont-discover": [
            "laravel/telescope"
        ]
      }
   },
   ```
7. In order to use the Hot Reload for webpack in docker container
   ```
   https://stackoverflow.com/questions/58861358/hot-reload-not-working-with-webpack-dev-server-and-docker

   Based on the above link, the only way at this moment and time of writing (2020-07-11), the only way is to set both docker & local port to same port for example -p 8880:8880.

   2nd finding is make sure you remove all the quasar related files in the Public Folder

   ```

8. Production Server need to generate new Laravel Passport Key
   ```
   php artisan passport:install
   ```

## Laravel License

The Laravel framework is open-sourced software licensed under the MIT license.

## Quasar License

Copyright (c) 2015-present Razvan Stoenescu MIT License
