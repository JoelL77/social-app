# Social App - Angular 21.2.0 SSR

Aplicación web tipo red social desarrollada con Angular, Signals, SSR (Angular Universal) y Tailwind CSS.

## Características

* Login con email y contraseña.
* Login con Google (OAuth simulado).
* Feed de publicaciones.
* Creación de publicaciones.
* Creación de comentarios.
* Likes en publicaciones.
* Persistencia de datos mediante LocalStorage.
* Estado global utilizando Signals Store.
* Renderizado del lado del servidor (SSR).
* Diseño responsivo con Tailwind CSS.
* Arquitectura basada en Standalone Components y Atomic Design.

---

## Tecnologías Utilizadas

* Angular 21
* TypeScript
* Angular SSR (Universal)
* Angular Signals
* Tailwind CSS 4
* LocalStorage

---

## Arquitectura

La aplicación está organizada siguiendo una estructura basada en características (Feature-Based Architecture) y Atomic Design.

### Atomic Design

La aplicación utiliza una arquitectura basada en Features y Standalone Components.
```
app
├── features
│   ├── auth
│   └── feed
│
├── shared
│   └── interfaces
```
Cada feature encapsula sus propias:

* Pages
* Components
* Store
* Guards
* Interfaces
* Mock data
* Aplicación de Atomic Design

Si bien no se implementaron carpetas explícitas para Atoms, Molecules y Organisms, los componentes fueron diseñados siguiendo dichos principios:

* Organisms
* Navbar
* Create Post
* Post Card
* Comments Form
* Comments Item
* Pages
* Login Page
* Feed Page

Esta organización permite mantener componentes reutilizables, desacoplados y fáciles de escalar.

### Estado Global

Se utiliza Signals Store para gestionar:

* Usuario autenticado.
* Lista de publicaciones.
* Lista de comentarios.
* Persistencia local.

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/JoelL77/social-app
```

Ingresar al proyecto:

```bash
cd social-app
```

Instalar dependencias:

```bash
npm install
```

---

## Ejecución en modo Desarrollo

```bash
npm start
```

o

```bash
ng serve
```

La aplicación estará disponible en:

```text
http://localhost:4200
```

---

## Ejecución en modo SSR

Iniciar la aplicación utilizando Angular SSR:

```bash
npm run serve:ssr:social-app
```

La aplicación se ejecutará renderizando las páginas desde el servidor utilizando Angular Universal.

---

## Build SSR

Generar la versión de producción:

```bash
npm run build
```

Generar específicamente la versión SSR:

```bash
npm run build:ssr
```

---

## Rutas con SSR

La aplicación utiliza Angular Universal con el siguiente esquema:

```ts
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
```

Por lo tanto, todas las rutas de la aplicación utilizan SSR:

| Ruta  | Renderizado |
| ----- | ----------- |
| /     | SSR         |
| /feed | SSR         |

Posteriormente Angular hidrata la aplicación y las interacciones continúan funcionando del lado del cliente (CSR).

---

## Persistencia

La información se almacena localmente utilizando LocalStorage:

* Usuario autenticado.
* Publicaciones.
* Comentarios.
* Likes.

No existe backend real para este desafío.

---

## OAuth Simulado

Se implementó un flujo de autenticación simulado mediante un botón:

* Login con Google

Este flujo genera un usuario mockeado y actualiza el estado global de autenticación.

---

## Consideraciones

* No se utiliza backend.
* No se utiliza base de datos.
* Prisma no es requerido ya que la aplicación no posee persistencia en servidor.
* Los datos se mantienen únicamente en LocalStorage.

## Deploy

La aplicación se encuentra desplegada en Vercel:

🔗 https://hroasis-social-app.vercel.app

### Proceso de Deploy

1. Se vinculó el repositorio de GitHub con Vercel.
2. Cada push a la rama principal genera automáticamente un nuevo despliegue.
3. Vercel realiza el build y publica la aplicación automáticamente