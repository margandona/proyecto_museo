@echo off
echo Creando estructura de carpetas para el patron 7-1...

mkdir sass
cd sass
mkdir base components layout pages themes abstracts vendors
cd base
echo /* Base styles here */ > _base.scss
cd..

cd components
echo /* Components styles here */ > _buttons.scss
cd..

cd layout
echo /* Layout styles here */ > _header.scss
cd..

cd pages
echo /* Page specific styles here */ > _home.scss
cd..

cd themes
echo /* Themes styles here */ > _theme.scss
cd..

cd abstracts
echo /* Functions, mixins, variables here */ > _mixins.scss
cd..

cd vendors
echo /* Third party styles here */ > _bootstrap.scss
cd..

cd..
echo Estructura creada exitosamente.
pause
