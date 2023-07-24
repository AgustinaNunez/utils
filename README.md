# @asofix/utils

Librería para asofix desarrollada en Typescript.

## ✍️ Trabajar en la libería
#### Pasos iniciales
```
git clone git@github.com:AgustinaNunez/utils.git 
yarn install
```
#### Subir cambios a la librería
1. Realizar los cambios en *./src*

2. Realizar el build:
```
yarn rollup
``` 
> Esto actualiza el build que está en *./dist* y es el que se usa cuando se importa desde un repositorio. 
> 
> El build se realiza usando el bundler [**rollup**](https://rollupjs.org/) siguiendo las configuraciones que están en *rollup.config.ts*. Está configurado para que se genere el build tanto para CommonJS como ES Modules.
> 

1. Subir los cambios a **main**
2. Generar un nuevo tag ```yarn run tag```


## 💅 Usar la librería
Para importar la última versión disponible de la librería en un repositorio
```
yarn add git+https://github.com/AgustinaNunez/utils.git
```
Para importar una versión específica, por ejemplo la *v1.6.10*:
```
yarn add git+https://github.com/AgustinaNunez/utils.git#v1.6.10
```

> **⚠️ WORKAROUND**: por el momento, si se quiere utilizar una versión nueva de la librería hay que hacer esto: 
> ```
> rm -rf ./node_modules/@agus && \
> yarn cache clean && \
> yarn add git+https://github.com/AgustinaNunez/utils.git
> ```

Ejemplo de uso con ES Modules:
```javascript
import { dates } from '@agus/utils'
...
const dateToFormat = '2000-05-30 10:00:00'
const timezoneUser = 'Europe/Paris'
const fechaFormateada = dates.formatDateWithTimezone(dateToFormat, timezoneUser)
...
```

