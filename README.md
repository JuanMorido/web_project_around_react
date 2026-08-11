# Around The U.S. — React

Galería interactiva de tarjetas de lugares, migrada de Programación Orientada a Objetos con TypeScript a **React**. En esta etapa la interfaz está componentizada y las ventanas emergentes se controlan con estado, no manipulando el DOM.

## Funcionalidad

- Renderiza el perfil del usuario y la galería de tarjetas a partir de un array de datos
- Abre y cierra tres ventanas emergentes: editar perfil, nuevo lugar y cambiar foto de perfil
- Abre la imagen de una tarjeta a tamaño completo, con su leyenda y sin título
- Todas las ventanas se cierran con el botón X

## Arquitectura

Cada componente vive en su propia carpeta dentro de `src/components`:

- `App` — estructura general de la página.
- `Header` / `Footer` — cabecera con el logo y pie de página.
- `Main` — perfil, galería y **el estado de las ventanas emergentes**.
- `Main/Card` — una tarjeta individual; recibe sus datos y su manejador por props.
- `Main/Popup` — contenedor genérico de ventana emergente (título opcional, contenido por `children`).
- `Main/Popup/NewCard`, `EditProfile`, `EditAvatar`, `ImagePopup` — el contenido de cada ventana.
- `src/types/types.ts` — interfaces `PopupConfig` y `CardData`.

El estado (`useState`) vive únicamente en `Main`: los componentes hijos no lo manejan, solo reciben props.

## Tecnologías

- React 19 (componentes funcionales y hooks)
- TypeScript (tipado estricto de props y datos)
- Vite (servidor de desarrollo y empaquetado)
- CSS3 con metodología BEM

## Cómo ejecutar

```bash
npm install
npm run dev      # servidor de desarrollo en el puerto 3000
npm run build    # compila a dist/
```
