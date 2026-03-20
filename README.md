Instalación y ejecución: 
    1. npm install 
    2. npm run dev

Breve explicación: 
Esta práctica ha estado enfocada a la reutilización de componentes y manejo de distintos estados. 
He creado los siguientes componentes: 
    - seactionContainer y cardWrapepr: utilizan un prop children, que se usa para definir un mismo estilo sin saber cuál será el contenido. 
    - searchBar: este componente es el encargado de capturar la entrada al usuario. Una vez tenga la entrada, tendrá que comunicársela al padre, para posteriormente mostrarlo por pantalla. 
    - productCard: es el encargado de renderizar la información básica del producto dentro del cardWrapper. 
En esta práctica he hecho uso de la elevación de estado. Esto significa que el estado de la búsqueda se encuentra en el padre, mientras que el hijo, es decir, el searchBar, se encarga de actualizar el estado de la página mediante una función pasada por props. 

El mayor problema que he tenido en esta práctica ha sido con los css. Le pedí ayuda a la IA para saber cómo ordenarlo. 

