
**Objetivo**

Develop an application that uses the Github API for searching users and repositories and showing the results in a nice way. The application must have at least 2 routes: user search and repositories search with the corresponding navigation. These routes must have a search bar and the search results must appear on the same page.

**Tecnologías/Librerías**
**Next JS**

Utilizaremos el framework de Next JS para realizar el proyecto. Existen dos formas de instalar Next.js una es utilizando el siguiente comando:
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"

La otra manera sería de forma “manual”:
npm init -y
npm i next react react-dom
Agregamos los scripts correspondientes:

Creamos la carpeta pages (mkdir pages)

Agregaremos un gitignore, para eso haremos uso de la siguiente pagina: https://www.toptal.com/developers/gitignore donde podremos obtener el gitignore apropiado para el proyecto.

**Redux**

Utilizaremos la librería redux para el manejo de los estados en la aplicaciòn y compartir los datos entre components
https://es.redux.js.org/

**Sagas**
https://redux-saga.js.org/

**Styled Components**

Utilizaremos la librería de styled componentes dada las funcionalidades y facilidades que nos ofrece para trabajar con ella, además del conocimiento que ya poseo sobre ella.
Para la instalación de la librería segui la siguiente guía:
https://dev.to/axelvaldez13/integrar-styled-components-a-un-proyecto-nextjs-con-typescript-44cm
FontAwesome
Utilizaremos la librería de fontawesome para los iconos: 
https://fontawesome.com/v5/docs/web/use-with/react

**Rsuite**
https://rsuitejs.com/
Para facilitar la creación de los diferentes componentes utilizaremos la librerìa Rsuite que nos provee una gran cantidad de componentes reutilizables en React.

**Vistas a Desarrollar**

Existirán por el momento tres grandes vistas, una para mostrar los repositorios de github, otra la de usuarios y una central donde mostraremos un dashboard.

**Dashboard**
En la primera vista mostraremos los usuarios y repositorios más populares, el usuario podrá navegar a través del header entre las diferentes secciones.

**Repositorios de Github**
En esta vista el usuario podrá realizar la búsqueda de repositorios mediante un input de tipo búsqueda y podrá setear la cantidad de elementos a buscar por pagina. Una vez que la búsqueda responda se renderiza la lista de repositorios mostrando alguno de sus atributos.

**Usuarios**

Al igual que los repositorios en la vista de usuarios también se podrá realizar la búsqueda de usuarios mediante un input de tipo texto, y setear la cantidad de elementos a buscar por página. Una vez que responda el endpoint renderizamos los usuarios , la única diferencia que tiene cada Card de User con los repositorios es que tendremos que ir a buscar mas informaciòn por cada uno de los usuarios.

**Github API**

Para llevar a cabo el proyecto tendremos que investigar la API que nos provee github para realizar automatizaciones e integraciones.
La api podremos encontrarla en el siguiente link: https://docs.github.com/es/rest


**Search Users**

https://docs.github.com/es/rest/search#search-users

**Search Repositories**

https://docs.github.com/es/rest/search#search-repositories

**Límite de peticiones**

En el navbar de la aplicaciòn agregaremos un popover que nos permitirá ver el límite de peticiones que tenemos actualmente debido a que la API de Github tiene un límite por IP para así darle un feedback siempre al usuario de que está sucediendo si es que no puede buscar más datos.

https://docs.github.com/es/rest/rate-limit

**Mejoras**

Agregar más filtros en las búsquedas

Agregar contador que muestre cuánto tiempo falta para que se resetee el límite

Agregar tests


